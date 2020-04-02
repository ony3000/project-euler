import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from toolbox import natural_sum, positive_divisors

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
