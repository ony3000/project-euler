from importlib import import_module
from time import time

class Stopwatch():
    def __init__(self):
        self.is_running = False
        self.laps = []
        self.precision = 3

    def start(self):
        self.is_running = True
        self.laps.append(time())

    def lap(self):
        if not self.is_running:
            raise Exception('타이머가 시작되지 않았습니다.')
        lap_number = len(self.laps)
        self.laps.append(time())
        lap_time = round(self.laps[-1] - self.laps[-2], self.precision)
        print(f'Lap {lap_number}: {lap_time} sec')

    def stop(self):
        if not self.is_running:
            raise Exception('타이머가 시작되지 않았습니다.')
        lap_number = len(self.laps)
        self.laps.append(time())
        lap_time = round(self.laps[-1] - self.laps[-2], self.precision)
        total_time = round(self.laps[-1] - self.laps[0], self.precision)
        if lap_number > 1:
            print(f'Final Lap: {lap_time} sec')
        print(f'Total execution time: {total_time} sec')
        self.is_running = False
        self.laps = []

if __name__ == '__main__':
    watch = Stopwatch()
    problems_per_group = 25
    solved_problems = 60

    for num in range(1, solved_problems+1):
        group_num = (num - 1)//problems_per_group + 1
        start_num = (group_num - 1)*problems_per_group + 1
        end_num = group_num * problems_per_group
        module_name = f'problems_{start_num:03d}to{end_num:03d}.problem_{num:03d}.solution'

        print(f'Problem #{num}')
        module = import_module(module_name)
        watch.start()
        module.Solution().execute()
        watch.stop()
