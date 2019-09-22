from functools import reduce
from math import gcd

if __name__ == '__main__':
    result = reduce(lambda a, b: a*b//gcd(a, b), range(1, 21))
    print(result)
