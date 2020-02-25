from math import factorial

def nth_lexicographic_permutation(n, elements=None):
    """자연수 n에 대해, n번째 사전식 순열을 구한다.

    기본적으로는 'a'부터 'z'까지의 문자들을 재배열하지만, 임의의 문자 리스트를 지정할 수도 있다."""
    if type(n) != int:
        raise TypeError('자연수가 아닙니다')
    if n <= 0:
        raise ValueError('자연수가 아닙니다')
    if elements is None:
        elements = [chr(ord('a')+x) for x in range(26)]
    elif type(elements) != list:
        raise TypeError('리스트가 아닙니다')
    else:
        if any(type(element) != str for element in elements):
            raise ValueError('문자로만 재배열 가능합니다')
        elements.sort()
    max_order = factorial(len(elements))
    if n > max_order:
        raise IndexError(f'최대 {max_order}가지 순열이 존재합니다')
    if len(elements) == 0:
        return None
    result = ''
    index = n - 1
    for num in range(len(elements)-1, 0, -1):
        permutation_count = factorial(num)
        quotient = index // permutation_count
        result += elements[quotient]
        elements = elements[:quotient] + elements[quotient+1:]
        index %= permutation_count
    result += elements[0]
    return result

if __name__ == '__main__':
    result = nth_lexicographic_permutation(1000000, list('0123456789'))
    print(result)
