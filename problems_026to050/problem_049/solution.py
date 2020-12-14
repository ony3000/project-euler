import os
import sys
from collections import Counter
from itertools import product

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import smaller_primes


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None
        primes_per_digits = {}

        for prime in smaller_primes(10000):
            if prime < 1000:
                continue

            digit_set = Counter(str(prime))
            combination = ''.join(sorted(digit_set.elements()))
            if combination in primes_per_digits:
                primes_per_digits[combination].append(prime)
            else:
                primes_per_digits[combination] = [prime]

        for combination in primes_per_digits:
            if len(primes_per_digits[combination]) < 3:
                continue

            permutable_primes = primes_per_digits[combination]
            for (a, b) in product(permutable_primes, repeat=2):
                if a >= b:
                    continue
                c = 2*b - a
                if c in permutable_primes and b != 4817 and a != 1487:
                    answer = str(a) + str(b) + str(c)

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
