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

        max_cycle_length = 0

        for num in range(2, 1000):
            prime_factors = prime_factorization(num)
            has_recurring_cycle = any(factor != 2 and factor != 5 for factor in prime_factors)
            recurring_cycle_length = 1

            if has_recurring_cycle:
                a = max(prime_factors.count(2), prime_factors.count(5))
                b = a + 1

                while (10**b - 10**a) % num != 0:
                    b += 1

                recurring_cycle_length = b - a

            if max_cycle_length < recurring_cycle_length:
                max_cycle_length = recurring_cycle_length
                answer = num

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
