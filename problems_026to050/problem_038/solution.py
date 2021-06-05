import os
import sys
from collections import Counter

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0

        pandigital_set = Counter('123456789')
        multiplicand_candidates = [1, 3, *range(5, 10), *range(25, 34), *range(100, 334), *range(5000, 10000)]

        for multiplicand in multiplicand_candidates:
            concatenated_product = ''

            for n in range(1, 10):
                product = multiplicand * n
                concatenated_product += str(product)

                if len(concatenated_product) == 9:
                    break

            product_digit_set = Counter(concatenated_product)

            if answer < int(concatenated_product) and product_digit_set == pandigital_set:
                answer = int(concatenated_product)

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
