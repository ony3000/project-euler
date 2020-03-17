import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from problems_001to025.problem_010.solution import smaller_primes

if __name__ == '__main__':
    result = None
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
                if rotated_num in primes:
                    circular_prime_candidates.add(rotated_num)
                else:
                    is_circular_prime = False
                    break
            if is_circular_prime:
                circular_primes |= circular_prime_candidates
    result = len(circular_primes)
    print(result)
