using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.IO.Enumeration;

namespace JSEater
{
    internal class Program
    {
        public static List<string> mandatoryArgs = new List<string>() { "-f", "-ojs" };

        static void Main(string[] args)
        {
            Dictionary<string, string> namedArguments = ParseNamedArguments(args);
            CheckMandatoryArguments(namedArguments);
            string urlFile = namedArguments["-f"];
            string outJSDir = namedArguments["-ojs"];
            string pattern = namedArguments.ContainsKey("-p") ? namedArguments["-a"] : "Samples\\patterns.json";
            string verbose = namedArguments.ContainsKey("-v") ? namedArguments["-v"] : "1";
            string jwt = namedArguments.ContainsKey("-jwt") ? namedArguments["-jwt"] : "1";
            string potentialURLs = namedArguments.ContainsKey("-potentialURLs") ? namedArguments["-potentialURLs"] : "1";
            string resultsPath = namedArguments.ContainsKey("-o") ? namedArguments["-o"] : "matches" + Guid.NewGuid().ToString() + ".txt";
            //DownloadJSFiles(urlFile, outJSDir);
            CheckFiles(pattern, outJSDir, resultsPath, verbose, jwt, potentialURLs);
            Console.WriteLine("Complete.");
            Console.ReadLine();
        }

        static void CheckFiles(string patternsPath, string outJSDir, string resultsPath, string verbose, string jwt, string potentialURLs)
        {
            string json = File.ReadAllText(patternsPath);
            JsonNode node = JsonNode.Parse(json);
            JsonArray patterns = node["patterns"].AsArray();
            List<RegExPattern> patternsList = new List<RegExPattern>();
            foreach (JsonNode reg in patterns)
            {
                RegExPattern pattern = new RegExPattern
                {
                    Name = reg["name"] != null ? reg["name"].ToString() : string.Empty,
                    RegEx = reg["regex"] != null ? reg["regex"].ToString() : string.Empty
                };
                patternsList.Add(pattern);
            }

            if (verbose == "0")
                patternsList = patternsList.Where(e => !string.IsNullOrEmpty(e.Name)).ToList();

            if (jwt == "0")
                patternsList = patternsList.Where(e => e.Name != "JSON Web Token (JWT)").ToList();

            if (potentialURLs == "0")
                patternsList = patternsList.Where(e => e.Name != "Potential URLs").ToList();

            string[] files = Directory.GetFiles(outJSDir, @"*.js", SearchOption.TopDirectoryOnly);
            Console.WriteLine("Preparing Patterns for matches");
            int filecounter = 1;
            foreach (string f in files)
            {
                Console.WriteLine("File:" + filecounter + " of " + files.Length);
                using (var sw = new StreamWriter(resultsPath, true))
                {
                    if (File.Exists(resultsPath))
                    {
                        sw.WriteLine("FileName: " + f);
                    }
                }
                string jsContents = File.ReadAllText(f);
                foreach (RegExPattern pattern in patternsList)
                {
                    Regex regex = new Regex(pattern.RegEx);
                    MatchCollection matches = regex.Matches(jsContents);
                    using (var sw = new StreamWriter(resultsPath, true))
                    {
                        foreach (Match match in matches)
                        {
                            sw.WriteLine(">>> " + pattern.Name);
                            if (match.Value.Length > 256)
                                sw.WriteLine("+++ " + match.Value.Substring(0, 255));
                            else
                                sw.WriteLine("+++ " + match.Value);
                        }
                    }
                }
                filecounter++;
            }
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

        static void DownloadJSFiles(string urlFile, string outDir)
        {
            string[] readUrls = File.ReadAllLines(urlFile);
            Directory.CreateDirectory(outDir);
            foreach (string url in readUrls)
            {
                using (var client = new HttpClient())
                {
                    using (var s = client.GetStreamAsync(url))
                    {
                        string filename = Path.GetFileName(url);
                        filename = filename.Insert(filename.ToLower().IndexOf(".js"), DateTime.Now.Millisecond.ToString());
                        using (var fs = new FileStream(outDir + "\\" + filename, FileMode.OpenOrCreate))
                        {
                            s.Result.CopyTo(fs);
                        }
                    }
                }
            }
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
    }
}