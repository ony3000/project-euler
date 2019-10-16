from ..problem_001.solution import natural_sum
from ..problem_004.solution import positive_divisors

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
