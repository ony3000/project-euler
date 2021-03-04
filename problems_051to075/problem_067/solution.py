import os
import sys
from functools import reduce

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch

PROBLEM_PATH = os.path.dirname(os.path.abspath(__file__))


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0

        stream = open(f'{PROBLEM_PATH}/triangle.txt', 'r')
        triangle = []

        while True:
            line = stream.readline()

            if line == '':
                break

            triangle += [[int(x) for x in line.strip().split(' ')]]

        partial_path_sum = [0, 0]

        for i in range(len(triangle)):
            row = triangle[i]

            for j in range(len(row)):
                left_path_sum = row[j] + partial_path_sum[j]
                right_path_sum = row[j] + partial_path_sum[j+1]
                row[j] = left_path_sum if left_path_sum > right_path_sum else right_path_sum

            partial_path_sum = [0, *row, 0]

        answer = reduce(lambda accumulator, current_value: accumulator if accumulator > current_value else current_value, partial_path_sum, answer)

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
