if __name__ == '__main__':
    result = None
    integers = range(2, 101)
    terms = set(a**b for a in integers for b in integers)
    result = len(terms)
    print(result)
