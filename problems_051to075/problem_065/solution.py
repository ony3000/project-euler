import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None

        reversed_sequence = [2]
        for order in range(2, 101):
            if order % 3 == 0:
                quotient = order // 3
                reversed_sequence[:0] = [2 * quotient]
            else:
                reversed_sequence[:0] = [1]

        numerator = 0
        denominator = 1

        for index, term in enumerate(reversed_sequence):
            numerator += term * denominator

            if index < len(reversed_sequence) - 1:
                numerator, denominator = denominator, numerator

        answer = sum(int(digit) for digit in str(numerator))

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
