import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from problems_001to025.problem_001.solution import natural_sum
from problems_001to025.problem_004.solution import positive_divisors

if __name__ == '__main__':
    result = None
    num = 1
    while result is None:
        triangle_number = natural_sum(num)
        divisors = positive_divisors(triangle_number)
        num += 1
        if len(divisors) > 500:
            result = triangle_number
            break
    print(result)
