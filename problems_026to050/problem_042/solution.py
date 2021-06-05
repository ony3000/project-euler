import os
import sys
from math import floor, sqrt

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch

PROBLEM_PATH = os.path.dirname(os.path.abspath(__file__))


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0

        stream = open(f'{PROBLEM_PATH}/words.txt', 'r')
        names = stream.readline().strip().split(',')

        for name in names:
            name = name.strip('"')
            word_value = sum(ord(letter)-ord('A')+1 for letter in name)
            num = floor(sqrt(word_value * 2))

            if num * (num+1) // 2 == word_value:
                answer += 1

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
