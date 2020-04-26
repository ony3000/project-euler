import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch
from toolbox import is_prime_naive, smaller_primes


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = None
        primes = smaller_primes(1000000)
        filtered_primes = [prime for prime in primes if '0' not in str(prime) and '5' not in str(prime)]
        circular_primes = set([5])
        for num in filtered_primes:
            if num not in circular_primes:
                is_circular_prime = True
                circular_prime_candidates = set([num])
                temp = str(num)
                for index in range(1, len(temp)):
                    rotated_num = int(temp[index:] + temp[:index])
                    if is_prime_naive(rotated_num):
                        circular_prime_candidates.add(rotated_num)
                    else:
                        is_circular_prime = False
                        break
                if is_circular_prime:
                    circular_primes |= circular_prime_candidates
        answer = len(circular_primes)
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
