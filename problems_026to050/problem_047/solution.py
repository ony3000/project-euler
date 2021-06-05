import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import prime_factorization


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None

        number_of_prime_factors = [0, 0, 0, 0]
        num = 2

        while answer is None:
            number_of_prime_factors[num % 4] = len(set(prime_factorization(num)))

            if all(prime_factor_count == 4 for prime_factor_count in number_of_prime_factors):
                answer = num - 3

            num += 1

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
