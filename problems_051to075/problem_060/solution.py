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

        prime_dict = {
            2: True,
        }
        prime_set_size = 5

        def find_prime_pair_set(base_connectable_primes, other_primes):
            for index, another_prime in enumerate(other_primes):
                is_all_prime = True

                for connectable_prime in base_connectable_primes:
                    forward_connected = int(f'{connectable_prime}{another_prime}')
                    reverse_connected = int(f'{another_prime}{connectable_prime}')

                    if forward_connected not in prime_dict:
                        prime_dict[forward_connected] = is_prime_naive(forward_connected)

                    if reverse_connected not in prime_dict:
                        prime_dict[reverse_connected] = is_prime_naive(reverse_connected)

                    if not prime_dict[forward_connected] or not prime_dict[reverse_connected]:
                        is_all_prime = False
                        break

                if is_all_prime:
                    extended_connectable_primes = [*base_connectable_primes, another_prime]

                    if len(base_connectable_primes) == prime_set_size-1:
                        return extended_connectable_primes
                    else:
                        more_smaller_primes = other_primes[index+1:]

                        prime_pair_set = find_prime_pair_set(extended_connectable_primes, more_smaller_primes)
                        if prime_pair_set is not None:
                            return prime_pair_set

            return None

        ordered_primes = [2]
        num = 3

        while answer is None:
            if num not in prime_dict:
                prime_dict[num] = is_prime_naive(num)

            if prime_dict[num]:
                smaller_primes = ordered_primes[:]
                ordered_primes = [num] + smaller_primes
                prime_pair_set = find_prime_pair_set([num], smaller_primes)

                if prime_pair_set is not None:
                    answer = sum(prime_pair_set)

            num += 2

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
