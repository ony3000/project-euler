class Stopwatch {
  constructor() {
    this.isRunning = false;
    this.laps = [];
  }

  start() {
    this.isRunning = true;
    this.laps.push(new Date().getTime() / 1000);
  }

  lap() {
    if (!this.isRunning) {
      throw new Error('타이머가 시작되지 않았습니다.');
    }

    const lapNumber = this.laps.length;

    this.laps.push(new Date().getTime() / 1000);

    const lapTime = this.laps[lapNumber] - this.laps[lapNumber - 1];

    console.log(`Lap ${lapNumber}: ${lapTime} sec`);
  }

  stop() {
    if (!this.isRunning) {
      throw new Error('타이머가 시작되지 않았습니다.');
    }

    const lapNumber = this.laps.length;

    this.laps.push(new Date().getTime() / 1000);

    const lapTime = this.laps[lapNumber] - this.laps[lapNumber - 1];
    const totalTime = this.laps[lapNumber] - this.laps[0];

    if (lapNumber > 1) {
      console.log(`Final Lap: ${lapTime} sec`);
    }

    console.log(`Total execution time: ${totalTime} sec`);

    this.isRunning = false;
    this.laps = [];
  }
}

module.exports = Stopwatch;
