import os
import sys
from math import ceil, sqrt

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import nth_polygonal_number


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None

        polygonal_numbers = {}

        def find_cyclic_numbers(overlapping_numbers, polygonal_angles):
            last_number = overlapping_numbers[-1]

            for angle in polygonal_angles:
                for num in polygonal_numbers[angle]:
                    if str(last_number)[2:] == str(num)[:2]:
                        if len(polygonal_angles) == 1:
                            first_number = overlapping_numbers[0]

                            if str(num)[2:] == str(first_number)[:2]:
                                return [*overlapping_numbers, num]

                        else:
                            copy_of_angles = polygonal_angles[:]
                            copy_of_angles.remove(angle)
                            cyclic_numbers = find_cyclic_numbers([*overlapping_numbers, num], copy_of_angles)

                            if cyclic_numbers is not None:
                                return cyclic_numbers

            return None

        for angle in range(3, 9):
            n_limit = ceil(sqrt(20000/(angle-2) + 0.25) + 0.5)
            polygonal_numbers[angle] = [nth_polygonal_number(angle, n) for n in range(1, n_limit)]
            polygonal_numbers[angle] = [num for num in polygonal_numbers[angle] if num >= 10**3 and num < 10**4]

        for num in polygonal_numbers[8]:
            cyclic_numbers = find_cyclic_numbers([num], [3, 4, 5, 6, 7])

            if cyclic_numbers is not None:
                answer = sum(cyclic_numbers)
                break

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
