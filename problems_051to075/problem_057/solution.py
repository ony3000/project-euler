import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0

        numerator = 1
        denominator = 1

        for _ in range(1000):
            numerator, denominator = (numerator + 2*denominator), (numerator + denominator)

            if len(str(numerator)) > len(str(denominator)):
                answer += 1

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
