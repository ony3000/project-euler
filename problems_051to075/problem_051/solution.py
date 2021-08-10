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

        prime_count_per_pattern = {}
        num = 9

        while answer is None:
            num += 2

            if not is_prime_naive(num):
                continue

            temp = str(num)
            unique_digits = set(temp[:-1])

            for digit in unique_digits:
                generating_pattern = temp[:-1].replace(digit, '*') + temp[-1:]

                if generating_pattern in prime_count_per_pattern:
                    continue

                prime_count = 0

                for substitute in '0123456789':
                    decimal = generating_pattern.replace('*', substitute)

                    if decimal[0] == '0':
                        continue

                    if is_prime_naive(int(decimal)):
                        prime_count += 1

                if prime_count == 8:
                    answer = num
                    break

                prime_count_per_pattern[generating_pattern] = prime_count

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
