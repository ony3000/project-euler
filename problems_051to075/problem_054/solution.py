import os
import sys
from collections import Counter
from functools import reduce

PROJECT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(PROJECT_PATH)

from measurement import Stopwatch

PROBLEM_PATH = os.path.dirname(os.path.abspath(__file__))


class Card():
    def __init__(self, text):
        value = {
            'T': 10,
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14,
        }
        suit = {
            'C': 'clubs',
            'D': 'diamonds',
            'H': 'hearts',
            'S': 'spades',
        }

        self.value = value[text[0]] if text[0] in value else int(text[0])
        self.suit = suit[text[1]]

    def __str__(self):
        return f'<{self.value} {self.suit}>'

class PokerHands():
    def __init__(self, text_array):
        self.cards = [Card(text) for text in text_array]
        self.value_counter = Counter([card.value for card in self.cards])
        self.suit_counter = Counter([card.suit for card in self.cards])

    def score(self):
        result = None

        ordered_values = [card.value for card in self.cards]
        ordered_values.sort(reverse=True)
        high_card_value = reduce(lambda accumulator, current_value: accumulator*0x10 + current_value, ordered_values, 0)

        (first_most_value, first_most_value_count) = self.value_counter.most_common()[0]
        (_, second_most_value_count) = self.value_counter.most_common()[1]

        (_, first_most_suit_count) = self.suit_counter.most_common()[0]

        is_straight = (first_most_value_count == 1 and ordered_values[0]-ordered_values[-1] == len(ordered_values)-1)
        is_flush = first_most_suit_count == 5

        base_exponent = 4
        extra_exponent = 0

        if is_straight or is_flush:
            if is_straight:
                extra_exponent += 4
            if is_flush:
                extra_exponent += 5

            result = 0x10 ** (base_exponent + extra_exponent) * first_most_value + high_card_value
        elif first_most_value_count > 1:
            extra_exponent += 2 ** (first_most_value_count-1) - 1

            if second_most_value_count == 2:
                extra_exponent *= 2

            result = 0x10 ** (base_exponent + extra_exponent) * first_most_value + high_card_value
        else:
            result = high_card_value

        return result

    def __str__(self):
        return str([str(card) for card in self.cards])

class Solution(Stopwatch):
    def __init__(self):
        super().__init__()

    def execute(self):
        answer = 0
        stream = open(f'{PROBLEM_PATH}/poker.txt', 'r')

        while True:
            line = stream.readline()

            if line == '':
                break

            first_hands = PokerHands(line.split()[:5])
            second_hands = PokerHands(line.split()[5:])

            if first_hands.score() > second_hands.score():
                answer += 1

        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
