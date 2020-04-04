import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0
        for num in range(1, 1000000):
            decimal = str(num)
            decimal_digits = [digit for digit in decimal]
            decimal_digits.reverse()
            reversed_decimal = ''.join(decimal_digits)
            if decimal == reversed_decimal:
                binary = format(num, 'b')
                binary_digits = [digit for digit in binary]
                binary_digits.reverse()
                reversed_binary = ''.join(binary_digits)
                if binary == reversed_binary:
                    answer += num
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
