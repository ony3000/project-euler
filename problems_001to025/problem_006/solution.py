import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from toolbox import natural_sum, square_sum

if __name__ == '__main__':
    result = natural_sum(100)**2 - square_sum(100)
    print(result)
