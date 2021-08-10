import os
import sys
from math import sqrt

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class CombinedNumber():
    def __init__(self, nonsquare_positive_integer, extra_integer):
        if type(nonsquare_positive_integer) != int:
            raise TypeError('자연수가 아닙니다')

        if nonsquare_positive_integer <= 0:
            raise ValueError('자연수가 아닙니다')

        if int(sqrt(nonsquare_positive_integer)) ** 2 == nonsquare_positive_integer:
            raise ValueError('제곱수가 아니어야 합니다')

        if type(extra_integer) != int:
            raise TypeError('정수가 아닙니다')

        self.nonsquare_positive_integer = nonsquare_positive_integer
        self.extra_integer = extra_integer

    def conjugate(self):
        return CombinedNumber(self.nonsquare_positive_integer, -self.extra_integer)

    def __str__(self):
        inner_expression = f'sqrt({self.nonsquare_positive_integer})'

        if self.extra_integer >= 0:
            inner_expression += f'+{self.extra_integer}'
        else:
            inner_expression += f'{self.extra_integer}'

        return f'<{inner_expression}>'

    def __float__(self):
        return sqrt(self.nonsquare_positive_integer) + self.extra_integer

class RationalNumber():
    def __init__(self, numerator, denominator=1):
        self.numerator = numerator
        self.denominator = denominator

        if type(denominator) == CombinedNumber:
            combined = denominator

            self.numerator = combined.conjugate()
            self.denominator = (combined.nonsquare_positive_integer - combined.extra_integer**2) / numerator

        if float(int(self.denominator)) == self.denominator:
            self.denominator = int(self.denominator)

    def __str__(self):
        numerator_expression = str(self.numerator)

        if type(self.numerator) == CombinedNumber:
            numerator_expression = f'({numerator_expression})'

        return f'<{numerator_expression}/{self.denominator}>'

    def __float__(self):
        return float(self.numerator) / float(self.denominator)

class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0

        for num in range(2, 10001):
            integer_part = int(sqrt(num))

            if integer_part ** 2 == num:
                continue

            decimal_part = RationalNumber(
                numerator=CombinedNumber(nonsquare_positive_integer=num, extra_integer=-integer_part),
                denominator=1,
            )
            last_decimal_part = decimal_part
            period = 0

            while True:
                period += 1

                inverse = RationalNumber(
                    numerator=last_decimal_part.denominator,
                    denominator=last_decimal_part.numerator,
                )
                next_integer_part = int(float(inverse))
                next_decimal_part = RationalNumber(
                    numerator=CombinedNumber(
                        nonsquare_positive_integer=inverse.numerator.nonsquare_positive_integer,
                        extra_integer=inverse.numerator.extra_integer - inverse.denominator*next_integer_part,
                    ),
                    denominator=inverse.denominator,
                )

                if float(next_decimal_part) == float(decimal_part):
                    break

                last_decimal_part = next_decimal_part

            if period % 2 == 1:
                answer += 1

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
