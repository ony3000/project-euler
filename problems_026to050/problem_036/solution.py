if __name__ == '__main__':
    result = 0
    for num in range(1, 1000000):
        decimal = str(num)
        decimal_digits = [digit for digit in decimal]
        decimal_digits.reverse()
        reversed_decimal = ''.join(decimal_digits)
        if decimal == reversed_decimal:
            binary = format(num, 'b')
            binary_digits = [digit for digit in binary]
            binary_digits.reverse()
            reversed_binary = ''.join(binary_digits)
            if binary == reversed_binary:
                result += num
    print(result)
