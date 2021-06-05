import os
import sys
from math import ceil, sqrt

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None

        pentagonal_numbers = []

        def nth_pentagonal_number(n):
            return n * (3*n - 1) // 2

        def is_pentagonal_number(num):
            guessed_n = ceil(sqrt(num * 2 / 3))

            return guessed_n > 0 and num == nth_pentagonal_number(guessed_n)

        num = 1

        while answer is None:
            new_pentagonal = nth_pentagonal_number(num)
            pentagonal_numbers.append(new_pentagonal)

            for existing_pentagonal in pentagonal_numbers:
                pentagonal_sum = existing_pentagonal + new_pentagonal
                pentagonal_diff = abs(existing_pentagonal - new_pentagonal)

                if is_pentagonal_number(pentagonal_sum) and is_pentagonal_number(pentagonal_diff):
                    answer = pentagonal_diff

            num += 1

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
