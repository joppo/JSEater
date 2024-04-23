using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace APKScan
{
    public static class BO
    {
        public class MatchResults
        {
            public int TotalMatches;
            public int UniqueMatches;

            public MatchResults()
            {
                TotalMatches = 0;
                UniqueMatches = 0;
            }
        }
    }
}
