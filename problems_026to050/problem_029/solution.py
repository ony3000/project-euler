import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None
        integers = range(2, 101)
        terms = set(a**b for a in integers for b in integers)
        answer = len(terms)
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
