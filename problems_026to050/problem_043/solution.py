import os
import sys
from collections import Counter

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import smaller_primes


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0

        pandigital_set = Counter('0123456789')

        def suffixes_with_divisibility_property(prefix):
            primes = smaller_primes(18)

            def recursive_closure(prefix, primes):
                if len(primes) == 0:
                    return None

                result = []
                prime = primes[0]

                for subnumber in range(0, 1000, prime):
                    if prefix % 100 != subnumber // 10:
                        continue

                    units_place = subnumber % 10
                    longer_prefix = str(prefix) + str(units_place)

                    if len(Counter(longer_prefix) - pandigital_set) > 0:
                        continue

                    suffixes = recursive_closure(int(longer_prefix), primes[1:])

                    if suffixes is None:
                        result.append(str(units_place))
                    else:
                        result += [str(units_place) + suffix for suffix in suffixes]

                return result

            return recursive_closure(prefix, primes)

        for prefix in range(102, 987+1):
            suffixes = suffixes_with_divisibility_property(prefix)

            for suffix in suffixes:
                decimal = str(prefix) + suffix

                if len(Counter(decimal) - pandigital_set) == 0 and len(pandigital_set - Counter(decimal)) == 0:
                    answer += int(decimal)

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
