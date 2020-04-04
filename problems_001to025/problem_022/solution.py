import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch

PROBLEM_PATH = os.path.dirname(os.path.abspath(__file__))


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0
        stream = open(f'{PROBLEM_PATH}/names.txt', 'r')
        names = stream.readline().strip().split(',')
        names.sort()
        for order, name in enumerate(names, start=1):
            name = name.strip('"')
            worth = sum(ord(letter)-ord('A')+1 for letter in name)
            answer += order * worth
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
