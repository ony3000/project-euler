import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from problems_001to025.problem_001.solution import natural_sum
from problems_001to025.problem_004.solution import positive_divisors

if __name__ == '__main__':
    result = None
    abundant_numbers = []
    two_abundant_sums = set()
    for num in range(1, 28124):
        proper_divisors = positive_divisors(num)[:-1]
        divisor_sum = sum(proper_divisors)
        if divisor_sum > num:
            abundant_numbers += [num]
            for abundant in abundant_numbers:
                abundant_sum = abundant + num
                if abundant_sum > 28123:
                    break
                else:
                    two_abundant_sums.add(abundant_sum)
    result = natural_sum(28123) - sum(two_abundant_sums)
    print(result)
