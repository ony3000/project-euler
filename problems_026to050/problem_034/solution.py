from math import factorial

if __name__ == '__main__':
    result = 0
    for num in range(10, 2540161):
        sum_of_factorials = sum(factorial(int(digit)) for digit in str(num))
        if sum_of_factorials == num:
            result += num
    print(result)
