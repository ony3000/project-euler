import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import prime_factorization


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = prime_factorization(600851475143)[-1]
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
