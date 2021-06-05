import os
import sys
from math import ceil, floor, sqrt

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None

        def nth_triangle_number(n):
            return n * (n + 1) // 2

        def nth_pentagonal_number(n):
            return n * (3*n - 1) // 2

        def nth_hexagonal_number(n):
            return n * (2*n - 1)

        def is_triangle_number(num):
            guessed_n = floor(sqrt(num * 2))

            return guessed_n > 0 and num == nth_triangle_number(guessed_n)

        def is_pentagonal_number(num):
            guessed_n = ceil(sqrt(num * 2 / 3))

            return guessed_n > 0 and num == nth_pentagonal_number(guessed_n)

        num = 144

        while answer is None:
            new_hexagonal = nth_hexagonal_number(num)

            if is_triangle_number(new_hexagonal) and is_pentagonal_number(new_hexagonal):
                answer = new_hexagonal

            num += 1

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
