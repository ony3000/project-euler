import os
import sys
from math import factorial

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from toolbox import nth_lexicographic_permutation

if __name__ == '__main__':
    result = None
    pandigital_products = set()
    for order in range(1, factorial(9)+1):
        permutation = nth_lexicographic_permutation(order, list('123456789'))
        product = int(permutation[5:])
        if int(permutation[0:1]) * int(permutation[1:5]) == product or int(permutation[0:2]) * int(permutation[2:5]) == product:
            pandigital_products.add(product)
    result = sum(pandigital_products)
    print(result)
