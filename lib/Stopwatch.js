class Stopwatch {
  constructor() {
    this.isRunning = false;
    this.laps = [];
    this.precision = 3;
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

    // eslint-disable-next-line no-console
    console.log(`Lap ${lapNumber}: ${lapTime.toFixed(this.precision)} sec`);
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
      // eslint-disable-next-line no-console
      console.log(`Final Lap: ${lapTime.toFixed(this.precision)} sec`);
    }

    // eslint-disable-next-line no-console
    console.log(`Total execution time: ${totalTime.toFixed(this.precision)} sec`);

    this.isRunning = false;
    this.laps = [];
  }
}

module.exports = Stopwatch;
