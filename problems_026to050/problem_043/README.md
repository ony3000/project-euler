## 43. Sub-string divisibility

1406357289는 0부터 9까지 한 번 씩만 사용해서 만들어졌으므로, 0~9 팬 디지털이다. 또한 이 수는, 부분열의 값을 나누어 떨어지게 할 수 있는 특성이 있다.

첫 번째 자리의 숫자를 <var>d</var><sub>1</sub>, 두 번째 자리의 숫자를 <var>d</var><sub>2</sub>라 하고, 나머지 자리의 숫자도 같은 방법으로 표기하면, 다음을 알 수 있다.

* <var>d</var><sub>2</sub><var>d</var><sub>3</sub><var>d</var><sub>4</sub>=406 은 2로 나누어 떨어진다.
* <var>d</var><sub>3</sub><var>d</var><sub>4</sub><var>d</var><sub>5</sub>=063 은 3으로 나누어 떨어진다.
* <var>d</var><sub>4</sub><var>d</var><sub>5</sub><var>d</var><sub>6</sub>=635 는 5로 나누어 떨어진다.
* <var>d</var><sub>5</sub><var>d</var><sub>6</sub><var>d</var><sub>7</sub>=357 은 7로 나누어 떨어진다.
* <var>d</var><sub>6</sub><var>d</var><sub>7</sub><var>d</var><sub>8</sub>=572 는 11로 나누어 떨어진다.
* <var>d</var><sub>7</sub><var>d</var><sub>8</sub><var>d</var><sub>9</sub>=728 은 13으로 나누어 떨어진다.
* <var>d</var><sub>8</sub><var>d</var><sub>9</sub><var>d</var><sub>10</sub>=289 는 17로 나누어 떨어진다.

위와 같은 특성을 갖는 모든 0~9 팬 디지털의 합을 구하여라.
