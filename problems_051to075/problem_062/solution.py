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

        permutation_dict = {}
        num = 0

        while True:
            num += 1

            cube_num = num ** 3
            digit_set = Counter(str(cube_num))
            one_of_permutations = ''.join(sorted(digit_set.elements()))

            if one_of_permutations in permutation_dict:
                permutation_dict[one_of_permutations] += [num]
            else:
                permutation_dict[one_of_permutations] = [num]

            if len(permutation_dict[one_of_permutations]) == 5:
                answer = permutation_dict[one_of_permutations][0] ** 3
                break

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
