import os

PROBLEM_PATH = os.path.dirname(os.path.abspath(__file__))

if __name__ == '__main__':
    result = 0
    stream = open(f'{PROBLEM_PATH}/names.txt', 'r')
    names = stream.readline().strip().split(',')
    names.sort()
    for order, name in enumerate(names, start=1):
        name = name.strip('"')
        worth = sum(ord(letter)-ord('A')+1 for letter in name)
        result += order * worth
    print(result)
