from problems_001to025.problem_001.solution import natural_sum
from problems_001to025.problem_003.solution import prime_factorization
from problems_001to025.problem_004.solution import positive_divisors
from problems_001to025.problem_006.solution import square_sum
from problems_001to025.problem_007.solution import first_primes
from problems_001to025.problem_010.solution import smaller_primes

if __name__ == '__main__':
    functions = [
        natural_sum,
        prime_factorization,
        positive_divisors,
        square_sum,
        first_primes,
        smaller_primes,
    ]
    for func in functions:
        formatted = f"""
{'-' * 60}
{func.__name__} (at {func.__module__})

{func.__doc__}
"""
        print(formatted.lstrip())
