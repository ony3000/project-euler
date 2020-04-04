import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import positive_divisors


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None
        for num in range(997, 99, -1):
            digits = [digit for digit in str(num)]
            digits.reverse()
            reversed_num = int(''.join(digits))
            palindrome = num*1000 + reversed_num
            divisors = positive_divisors(palindrome)
            valid_divisors = [divisor for divisor in divisors if divisor < 1000 and divisor >= 100]
            quotients = [palindrome // divisor for divisor in valid_divisors]
            valid_quotients = [quotient for quotient in quotients if quotient < 1000 and quotient >= 100]
            if len(valid_quotients) > 0:
                answer = palindrome
                break
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
