import os
import sys
from math import factorial

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import nth_lexicographic_permutation


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None

        pandigital_products = set()

        for order in range(1, factorial(9)+1):
            permutation = nth_lexicographic_permutation(order, list('123456789'))
            product = int(permutation[5:])

            if int(permutation[0:1]) * int(permutation[1:5]) == product or int(permutation[0:2]) * int(permutation[2:5]) == product:
                pandigital_products.add(product)

        answer = sum(pandigital_products)

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
