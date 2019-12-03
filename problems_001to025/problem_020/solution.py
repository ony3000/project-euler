from math import factorial

if __name__ == '__main__':
    result = sum(int(digit) for digit in str(factorial(100)))
    print(result)
