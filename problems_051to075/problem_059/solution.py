import os
import sys
from itertools import product

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch

PROBLEM_PATH = os.path.dirname(os.path.abspath(__file__))


class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0

        def decrypt_message(ascii_codes, candidate_key):
            copy_of_codes = ascii_codes[:]
            key_length = len(candidate_key)

            for index in range(key_length):
                partial_codes = copy_of_codes[index::key_length]
                decrypted_characters = [chr(code ^ candidate_key[index]) for code in partial_codes]
                copy_of_codes[index::key_length] = decrypted_characters

            return ''.join(copy_of_codes)

        """
        출처: https://en.wikipedia.org/wiki/Most_common_words_in_English

        많이 사용되는 단어 100개를 글자 수로 구분했을 때, 4글자 단어가 제일 많아서 4글자 단어만 사용하기로 함
        """
        common_english_words = [
            'that',
            'have',
            'with',
            'this',
            'from',
            'they',
            'will',
            'what',
            'when',
            'make',
            'like',
            'time',
            'just',
            'know',
            'take',
            'into',
            'year',
            'your',
            'good',
            'some',
            'them',
            'than',
            'then',
            'look',
            'only',
            'come',
            'over',
            'also',
            'back',
            'work',
            'well',
            'even',
            'want',
            'give',
            'most',
        ]

        stream = open(f'{PROBLEM_PATH}/cipher.txt', 'r')
        codes = [int(x) for x in stream.readline().strip().split(',')]

        max_count = 0
        encryption_key = None
        base_code = ord('a')

        for (first_index, second_index, third_index) in product(range(26), repeat=3):
            candidate_key = (
                base_code + first_index,
                base_code + second_index,
                base_code + third_index,
            )

            decrypted_message = decrypt_message(codes, candidate_key)
            match_word_count = sum(int(word in decrypted_message) for word in common_english_words)

            if max_count < match_word_count:
                max_count = match_word_count
                encryption_key = candidate_key

        plain_message = decrypt_message(codes, encryption_key)
        for letter in plain_message:
            answer += ord(letter)

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
