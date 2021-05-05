import os
import sys
from math import floor, gcd, sqrt

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import positive_divisors


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        """NOTE: This solution takes more than 1 hour."""

        answer = 0

        max_wire_length = 1500000

        primitive_lengths = []

        for a in range(3, floor(max_wire_length / (2 + sqrt(2))) + 1):
            for bc_diff in positive_divisors(a**2):
                if bc_diff >= a:
                    break

                if bc_diff % 2 != a % 2:
                    continue

                b = int((a**2 - bc_diff**2) / (2 * bc_diff))

                if a > b:
                    continue

                c = b + bc_diff
                wire_length = a + b + c

                if wire_length > max_wire_length:
                    continue

                if a**2 + b**2 == c**2 and gcd(a, b, c) == 1:
                    primitive_lengths += [wire_length]

        for wire_length in range(12, max_wire_length+1, 2):
            triangle_count = len(list(primitive_length for primitive_length in primitive_lengths if wire_length % primitive_length == 0))

            if triangle_count == 1:
                answer += 1

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
