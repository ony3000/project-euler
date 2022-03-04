## 111. Primes with runs

Considering 4-digit primes containing repeated digits it is clear that they cannot all be the same: 1111 is divisible by 11, 2222 is divisible by 22, and so on. But there are nine 4-digit primes containing three ones:

<p align="center">
  1117, 1151, 1171, 1181, 1511, 1811, 2111, 4111, 8111
</p>

We shall say that M(<var>n</var>, <var>d</var>) represents the maximum number of repeated digits for an <var>n</var>-digit prime where <var>d</var> is the repeated digit, N(<var>n</var>, <var>d</var>) represents the number of such primes, and S(<var>n</var>, <var>d</var>) represents the sum of these primes.

So M(4, 1) = 3 is the maximum number of repeated digits for a 4-digit prime where one is the repeated digit, there are N(4, 1) = 9 such primes, and the sum of these primes is S(4, 1) = 22275. It turns out that for <var>d</var> = 0, it is only possible to have M(4, 0) = 2 repeated digits, but there are N(4, 0) = 13 such cases.

In the same way we obtain the following results for 4-digit primes.

<table align="center">
  <thead>
    <tr>
      <th>Digit, <var>d</var></th>
      <th>M(4, <var>d</var>)</th>
      <th>N(4, <var>d</var>)</th>
      <th>S(4, <var>d</var>)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>2</td>
      <td>13</td>
      <td>67061</td>
    </tr>
    <tr>
      <td>1</td>
      <td>3</td>
      <td>9</td>
      <td>22275</td>
    </tr>
    <tr>
      <td>2</td>
      <td>3</td>
      <td>1</td>
      <td>2221</td>
    </tr>
    <tr>
      <td>3</td>
      <td>3</td>
      <td>12</td>
      <td>46214</td>
    </tr>
    <tr>
      <td>4</td>
      <td>3</td>
      <td>2</td>
      <td>8888</td>
    </tr>
    <tr>
      <td>5</td>
      <td>3</td>
      <td>1</td>
      <td>5557</td>
    </tr>
    <tr>
      <td>6</td>
      <td>3</td>
      <td>1</td>
      <td>6661</td>
    </tr>
    <tr>
      <td>7</td>
      <td>3</td>
      <td>9</td>
      <td>57863</td>
    </tr>
    <tr>
      <td>8</td>
      <td>3</td>
      <td>1</td>
      <td>8887</td>
    </tr>
    <tr>
      <td>9</td>
      <td>3</td>
      <td>7</td>
      <td>48073</td>
    </tr>
  </tbody>
</table>

For <var>d</var> = 0 to 9, the sum of all S(4, <var>d</var>) is 273700.

Find the sum of all S(10, <var>d</var>).
