import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import is_prime_naive


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None

        number_count = 1
        prime_count = 0
        distance_from_origin = 0

        while answer is None:
            distance_from_origin += 1

            current_square_length = 2*distance_from_origin + 1
            inner_square_length = current_square_length - 2

            diagonal_gap = current_square_length - 1
            min_diagonal = inner_square_length ** 2 + diagonal_gap
            max_diagonal = current_square_length ** 2

            number_count += 4

            for num in range(min_diagonal, max_diagonal + 1, diagonal_gap):
                if is_prime_naive(num):
                    prime_count += 1

            if prime_count / number_count < 0.1:
                answer = current_square_length

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
