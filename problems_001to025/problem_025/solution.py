if __name__ == '__main__':
    result = 2
    a, b = 1, 1
    while len(str(b)) < 1000:
        a, b = b, a+b
        result += 1
    print(result)
