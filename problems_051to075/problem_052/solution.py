import os
import sys
from collections import Counter

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None

        exponent = 0
        while answer is None:
            start = 10 ** exponent
            end = start * 10 // 6

            for num in range(start, end+1):
                has_same_digits = True
                digit_set = Counter(str(num))

                for coefficient in range(2, 7):
                    another_digit_set = Counter(str(num * coefficient))

                    if digit_set != another_digit_set:
                        has_same_digits = False
                        break

                if has_same_digits:
                    answer = num
                    break

            exponent += 1

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
