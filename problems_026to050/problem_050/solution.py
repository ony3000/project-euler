import os
import sys
from math import log

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import first_primes, is_prime_naive


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None

        limit = 1000000
        n = 1

        while True:
            approximate_value = n**2 * log(n) / 2

            if approximate_value >= limit:
                break

            n += 1

        primes = first_primes(n)

        for length in range(n, 0, -1):
            for start_index in range(0, n-length+1):
                end_index = start_index + length
                consecutive_sum = sum(primes[start_index:end_index])

                if consecutive_sum < limit and is_prime_naive(consecutive_sum):
                    answer = consecutive_sum
                    break

            if answer is not None:
                break

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
