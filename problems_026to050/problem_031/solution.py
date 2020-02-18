def number_of_partitions(n, parts=None):
    """음이 아닌 정수 n에 대해, n을 분할하는 방법의 수를 구한다.

    기본적으로는 1부터 n까지의 자연수들로 분할하지만, 임의의 자연수 리스트를 지정할 수도 있다."""
    if type(n) != int:
        raise TypeError('정수가 아닙니다')
    if n < 0:
        raise ValueError('음의 정수가 아니어야 합니다')
    if parts is None:
        parts = [x for x in range(n, 0, -1)]
    elif type(parts) != list:
        raise TypeError('리스트가 아닙니다')
    else:
        if any(type(part) != int or part <= 0 for part in parts):
            raise ValueError('자연수로만 분할 가능합니다')
        parts.sort(reverse=True)
    def recursive_closure(n, sorted_parts):
        if n == 0:
            return 1
        elif len(sorted_parts) == 0:
            return 0
        elif len(sorted_parts) == 1:
            largest_part = sorted_parts[0]
            return (1 if n % largest_part == 0 else 0)
        else:
            result = 0
            largest_part = sorted_parts[0]
            max_available_count = n // largest_part
            for used_count in range(max_available_count, -1, -1):
                remainder = n - largest_part * used_count
                result += recursive_closure(remainder, sorted_parts[1:])
            return result
    return recursive_closure(n, parts)

if __name__ == '__main__':
    result = number_of_partitions(200, [1, 2, 5, 10, 20, 50, 100, 200])
    print(result)
