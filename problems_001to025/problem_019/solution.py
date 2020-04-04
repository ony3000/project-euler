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
        day_of_week = 1
        for year in range(1900, 2001):
            for month in range(1, 13):
                if year >= 1901 and day_of_week == 0:
                    answer += 1
                if month == 4 or month == 6 or month == 9 or month == 11:
                    day_of_week += 30
                elif month != 2:
                    day_of_week += 31
                else:
                    if (year%4 == 0 and year%100 != 0) or year%400 == 0:
                        day_of_week += 29
                    else:
                        day_of_week += 28
                day_of_week %= 7
        return answer

if __name__ == '__main__':
    soln = Solution()
    result = soln.execute()
    print(result)
