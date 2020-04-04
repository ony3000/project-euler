import os
import sys

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0
        word_per_number = {
            0: '',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
            100: 'hundred',
        }
        for num in range(1, 1000):
            word_count = 0
            hundreds_place = num // 100
            tens_place = (num % 100) // 10
            units_place = num % 10
            if hundreds_place > 0:
                word_count += len(word_per_number[hundreds_place] + word_per_number[100])
            if tens_place > 0 or units_place > 0:
                if hundreds_place > 0:
                    word_count += len('and')
                if tens_place < 2:
                    word_count += len(word_per_number[tens_place*10+units_place])
                else:
                    word_count += len(word_per_number[tens_place*10] + word_per_number[units_place])
            answer += word_count
        answer += len('one' + 'thousand')
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
