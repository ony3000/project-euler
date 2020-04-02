import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from toolbox import natural_sum

if __name__ == '__main__':
    result = 3*natural_sum(999//3) + 5*natural_sum(999//5) - 15*natural_sum(999//15)
    print(result)
