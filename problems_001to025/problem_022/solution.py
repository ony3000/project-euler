if __name__ == '__main__':
    result = 0
    stream = open('./names.txt', 'r')
    names = stream.readline().strip().split(',')
    names.sort()
    for order, name in enumerate(names, start=1):
        name = name.strip('"')
        worth = sum(ord(letter)-ord('A')+1 for letter in name)
        result += order * worth
    print(result)
