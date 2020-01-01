from math import factorial

if __name__ == '__main__':
    result = ''
    digits = list('0123456789')
    order = 1000000
    index = order - 1
    for num in range(len(digits)-1, 0, -1):
        permutation_count = factorial(num)
        quotient = index // permutation_count
        result += digits[quotient]
        digits = digits[:quotient] + digits[quotient+1:]
        index %= permutation_count
    result += digits[0]
    print(result)
