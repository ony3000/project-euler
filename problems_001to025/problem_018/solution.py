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

        numbers = """
75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
"""
        triangle = [[int(element) for element in row.split()] for row in numbers.strip().split('\n')]

        partial_path_sum = [0, 0]

        for i in range(len(triangle)):
            row = triangle[i]

            for j in range(len(row)):
                left_path_sum = row[j] + partial_path_sum[j]
                right_path_sum = row[j] + partial_path_sum[j+1]
                row[j] = max(left_path_sum, right_path_sum)

            partial_path_sum = [0, *row, 0]

        answer = max(partial_path_sum)

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
