const solution = () => {
  let answer = 0;

  let dayOfWeek = 1;

  for (let year = 1900; year <= 2000; year += 1) {
    for (let month = 1; month <= 12; month += 1) {
      if (year >= 1901 && dayOfWeek === 0) {
        answer += 1;
      }

      if ([4, 6, 9, 11].includes(month)) {
        dayOfWeek += 30;
      }
      else if (month !== 2) {
        dayOfWeek += 31;
      }
      else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        dayOfWeek += 29;
      }
      else {
        dayOfWeek += 28;
      }

      dayOfWeek %= 7;
    }
  }

  return answer;
};

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.log(solution());
}

module.exports = solution;
