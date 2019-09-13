if __name__ == '__main__':
    result = 0
    a, b = 1, 2
    while b <= 4000000:
        result += b
        a, b = (a + 2*b), (2*a + 3*b)
    print(result)
