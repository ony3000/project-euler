import os
import sys
# Import python standard library here.

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
# Import custom made library here.


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None
        # Write code to calculate the answer here.
        return answer

if __name__ == '__main__':
    # To measure execution time, uncomment the two comments below.
    soln = Solution()
    # soln.start()
    result = soln.execute()
    # soln.stop()
    print(result)
