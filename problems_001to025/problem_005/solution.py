import os
import sys
from math import gcd

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 1

        for num in range(1, 21):
            answer = answer * num // gcd(answer, num)

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
