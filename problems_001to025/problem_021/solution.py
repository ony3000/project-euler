import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from problems_001to025.problem_004.solution import positive_divisors

if __name__ == '__main__':
    result = None
    amicable_numbers = []
    divisor_sum_per_number = {
        0: 0,
    }
    for num in range(1, 10000):
        proper_divisors = positive_divisors(num)[:-1]
        divisor_sum = sum(proper_divisors)
        divisor_sum_per_number[num] = divisor_sum
        if divisor_sum < num and divisor_sum_per_number[divisor_sum] == num:
            amicable_numbers += [num, divisor_sum]
    result = sum(amicable_numbers)
    print(result)
