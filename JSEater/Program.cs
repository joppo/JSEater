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
            string pattern = namedArguments.ContainsKey("-p") ? namedArguments["-a"] : "patterns.json";
            string resultsPath = namedArguments.ContainsKey("-o") ? namedArguments["-o"] : "matches.txt";
            DownloadJSFiles(urlFile, outJSDir);
            CheckFiles(pattern, outJSDir, resultsPath);
            Console.WriteLine("Complete.");
            Console.ReadLine();
        }

        static void CheckFiles(string patternsPath, string outJSDir, string resultsPath)
        {
            string json = File.ReadAllText(patternsPath);
            JsonNode node = JsonNode.Parse(json);
            JsonArray patterns = node["patterns"].AsArray();

            string[] files = Directory.GetFiles(outJSDir, @"*.js", SearchOption.TopDirectoryOnly);
            foreach (string f in files)
            {
                using (var sw = new StreamWriter(resultsPath, true))
                {
                    if (File.Exists(resultsPath))
                    {
                        sw.WriteLine("FileName: " + f);
                    }
                }
                string jsContents = File.ReadAllText(f);
                foreach (JsonNode reg in patterns)
                {
                    RegExPattern pattern = new RegExPattern
                    {
                        Name = reg["name"].ToString(),
                        RegEx = reg["regex"].ToString()
                    };

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