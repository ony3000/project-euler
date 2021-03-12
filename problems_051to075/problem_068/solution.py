import os
import sys
from collections import Counter
from itertools import product

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0

        for inner_nodes in product(range(1, 10), repeat=5):
            (_, most_frequent_count) = Counter(inner_nodes).most_common()[0]

            if most_frequent_count > 1:
                continue

            magic_sum = 10 + inner_nodes[0] + inner_nodes[1]

            outer_nodes = [
                10,
                magic_sum - (inner_nodes[1] + inner_nodes[2]),
                magic_sum - (inner_nodes[2] + inner_nodes[3]),
                magic_sum - (inner_nodes[3] + inner_nodes[4]),
                magic_sum - (inner_nodes[4] + inner_nodes[0]),
            ]

            if any(num < 1 or num > 10 for num in outer_nodes):
                continue

            (_, most_frequent_count) = Counter([*inner_nodes, *outer_nodes]).most_common()[0]

            if most_frequent_count > 1:
                continue

            concatenated_string = ''
            starting_index = outer_nodes.index(min(outer_nodes))

            for index in range(0, 5):
                current_index = (starting_index + index) % 5
                next_index = (current_index + 1) % 5

                concatenated_string += str(outer_nodes[current_index])
                concatenated_string += str(inner_nodes[current_index])
                concatenated_string += str(inner_nodes[next_index])

            if answer < int(concatenated_string):
                answer = int(concatenated_string)

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
