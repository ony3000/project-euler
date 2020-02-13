if __name__ == '__main__':
    result = 0
    for num in range(10, 354295):
        sum_of_powers = sum(int(digit)**5 for digit in str(num))
        if sum_of_powers == num:
            result += num
    print(result)
