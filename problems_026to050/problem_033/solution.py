from collections import Counter
from math import gcd

if __name__ == '__main__':
    result = None
    numerator_product = 1
    denominator_product = 1
    for denominator in range(10, 100):
        for numerator in range(10, denominator):
            numerator_digits = Counter(str(numerator))
            denominator_digits = Counter(str(denominator))
            common_digits = numerator_digits & denominator_digits
            if len(list(common_digits)) == 1 and '0' not in list(common_digits):
                canceled_numerator = int(set(numerator_digits - common_digits).pop())
                canceled_denominator = int(set(denominator_digits - common_digits).pop())
                if canceled_numerator < canceled_denominator:
                    original_fraction_value = numerator / denominator
                    canceled_fraction_value = canceled_numerator / canceled_denominator
                    if original_fraction_value == canceled_fraction_value:
                        numerator_product *= canceled_numerator
                        denominator_product *= canceled_denominator
    result = denominator_product // gcd(numerator_product, denominator_product)
    print(result)
