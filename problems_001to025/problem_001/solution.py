def natural_sum(n):
    """자연수 n에 대해, 1부터 n까지의 합을 구한다."""
    if type(n) != int:
        raise TypeError('자연수가 아닙니다')
    if n <= 0:
        raise ValueError('자연수가 아닙니다')
    return n * (n+1) // 2

if __name__ == '__main__':
    result = 3*natural_sum(999//3) + 5*natural_sum(999//5) - 15*natural_sum(999//15)
    print(result)
