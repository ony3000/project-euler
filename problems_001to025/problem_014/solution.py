if __name__ == '__main__':
    result = None
    max_sequence_length = 0
    length_per_starter = {}
    for starter in range(1, 1000000):
        num = starter
        length = 1
        while num > 1:
            if num % 2 == 0:
                num //= 2
            else:
                num = 3*num + 1
            if num in length_per_starter:
                length += length_per_starter[num]
                break
            else:
                length += 1
        length_per_starter[starter] = length
        if max_sequence_length < length:
            max_sequence_length = length
            result = starter
    print(result)
