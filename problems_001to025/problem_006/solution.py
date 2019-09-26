from ..problem_001.solution import natural_sum


def square_sum(n):
    """자연수 n에 대해, 1부터 n까지 제곱의 합을 구한다."""
    if type(n) != int:
        raise TypeError('자연수가 아닙니다')
    if n <= 0:
        raise ValueError('자연수가 아닙니다')
    return n * (n+1) * (2*n+1) // 6

if __name__ == '__main__':
    result = natural_sum(100)**2 - square_sum(100)
    print(result)
