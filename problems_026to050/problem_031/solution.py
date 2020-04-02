import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from toolbox import number_of_partitions

if __name__ == '__main__':
    result = number_of_partitions(200, [1, 2, 5, 10, 20, 50, 100, 200])
    print(result)
