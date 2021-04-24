import os
import sys
from math import factorial

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0

        length_per_starter = {}

        for num in range(1, 1000000):
            target = num
            chain = []
            length_of_chain = None

            while True:
                if target in chain:
                    break

                chain += [target]
                target = sum(factorial(int(digit)) for digit in str(target))

                if target in length_per_starter:
                    length_of_chain = len(chain) + length_per_starter[target]
                    break

            if length_of_chain is None:
                length_of_chain = len(chain)

            length_per_starter[num] = length_of_chain

            if length_of_chain == 60:
                answer += 1

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
