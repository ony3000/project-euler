import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import is_prime_naive


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None

        truncatable_primes = []
        num = 11

        while len(truncatable_primes) < 11:
            if '0' not in str(num) and '5' not in str(num)[1:]:
                if is_prime_naive(num):
                    is_truncatable_prime = True
                    temp = str(num)

                    for index in range(1, len(temp)):
                        left_truncated = int(temp[index:])
                        right_truncated = int(temp[:index])

                        if not is_prime_naive(left_truncated) or not is_prime_naive(right_truncated):
                            is_truncatable_prime = False
                            break

                    if is_truncatable_prime:
                        truncatable_primes.append(num)

            num += 2

        answer = sum(truncatable_primes)

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
