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

        max_sequence_length = 0
        length_per_starter = {}

        for starter in range(1, 1000000):
            num = starter
            length = 1

            while num > 1:
                if num % 2 == 0:
                    num //= 2
                else:
                    num = 3*num + 1

                if num in length_per_starter:
                    length += length_per_starter[num]
                    break
                else:
                    length += 1

            length_per_starter[starter] = length

            if max_sequence_length < length:
                max_sequence_length = length
                answer = starter

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
