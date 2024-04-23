using System.Text.Json.Nodes;
using System.Text.RegularExpressions;

namespace APKScan
{
    internal class Program
    {
        public static List<string> mandatoryArgs = new List<string>() { "-i", "-o" };

        static void Main(string[] args)
        {
            Dictionary<string, string> namedArguments = ParseNamedArguments(args);
            CheckMandatoryArguments(namedArguments);
            string sourceDir = namedArguments["-i"];
            string outFileName = namedArguments["-o"];
            string pattern = namedArguments.ContainsKey("-p") ? namedArguments["-p"] : "Samples\\patterns.json";

            ReadFilesRecursively(sourceDir, outFileName, pattern);
        }

        public static void ReadFilesRecursively(string directoryPath, string outFilePath, string patternsPath)
        {
            BO.MatchResults mr = new BO.MatchResults();
            int total_matches = 0;
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
            try
            {
                Console.WriteLine("Preparing Patterns for matches");
                int filecounter = 1;
                bool filename_recorded = false;
                List<string> matchesHistory = new List<string>();
                
                foreach (string filePath in Directory.GetFiles(directoryPath))
                {
                    Console.WriteLine($"Reading file: {filePath}");

                    string f = File.ReadAllText(filePath);
                    foreach (RegExPattern pattern in patternsList)
                    {
                        Regex regex = new Regex(pattern.RegEx);
                        MatchCollection matches = regex.Matches(f);
                        using (var sw = new StreamWriter(outFilePath, true))
                        {
                            foreach (Match match in matches)
                            {
                                mr.TotalMatches++;
                                total_matches++;
                                if (!matchesHistory.Contains(match.Value))
                                {
                                    if (!filename_recorded)
                                    {
                                        sw.WriteLine("FileName: " + f);
                                        filename_recorded = true;
                                    }
                                    mr.UniqueMatches++;
                                    matchesHistory.Add(match.Value);
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

                foreach (string subdirectory in Directory.GetDirectories(directoryPath))
                {
                    ReadFilesRecursively(subdirectory, outFilePath, patternsPath);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
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
