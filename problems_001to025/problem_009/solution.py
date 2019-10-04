from math import ceil

if __name__ == '__main__':
    result = None
    for a in range(332, 0, -1):
        for b in range(a+1, ceil((1000-a) / 2)):
            c = 1000 - (a + b)
            if a**2 + b**2 == c**2:
                result = a * b * c
                break
        if result is not None:
            break
    print(result)
