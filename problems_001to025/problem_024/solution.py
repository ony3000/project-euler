import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from toolbox import nth_lexicographic_permutation

if __name__ == '__main__':
    result = nth_lexicographic_permutation(1000000, list('0123456789'))
    print(result)
