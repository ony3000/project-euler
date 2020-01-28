if __name__ == '__main__':
    result = 0
    spiral_size = 1001
    contour_count = (spiral_size + 1) // 2
    for index in range(contour_count):
        if index == 0:
            result += 1
        else:
            contour_size = 2*index + 1
            max_inner_number = (contour_size-2) ** 2
            result += max_inner_number*4 + (contour_size-1)*10
    print(result)
