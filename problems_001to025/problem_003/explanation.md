## 3. Largest prime factor

1보다 큰 정수 N이 다음과 같이 소인수분해 된다고 하자.

<p align="center">
  N = p<sub>1</sub><sup>e<sub>1</sub></sup>p<sub>2</sub><sup>e<sub>2</sub></sup> &ctdot; p<sub>n</sub><sup>e<sub>n</sub></sup> (단, p<sub>k</sub>는 소수, e<sub>k</sub>는 자연수, p<sub>1</sub> &lt; p<sub>2</sub> &lt; &ctdot; &lt; p<sub>n</sub> 이다.)
</p>

문제의 답은 p<sub>n</sub>이지만, 직접 구하는 것은 비효율적이다.

이 때 p<sub>1</sub>, 즉 가장 작은 소인수는 비교적 쉽게 구할 수 있으므로,<br>
N의 약수 중 p<sub>1</sub>을 인수로 갖지 않는 가장 큰 약수 N'을 생각해볼 수 있다.

<p align="center">
  N' = <sup>N</sup>/<sub>p<sub>1</sub><sup>e<sub>1</sub></sup></sub> = p<sub>2</sub><sup>e<sub>2</sub></sup>p<sub>3</sub><sup>e<sub>3</sub></sup> &ctdot; p<sub>n</sub><sup>e<sub>n</sub></sup>
</p>

그러면 N'의 가장 작은 소인수는 p<sub>2</sub>가 되고,<br>
같은 방법으로, N'의 약수 중 p<sub>2</sub>를 인수로 갖지 않는 가장 큰 약수 N''을 생각해볼 수 있다.

<p align="center">
  N'' = <sup>N'</sup>/<sub>p<sub>2</sub><sup>e<sub>2</sub></sup></sub> = p<sub>3</sub><sup>e<sub>3</sub></sup> &ctdot; p<sub>n</sub><sup>e<sub>n</sub></sup>
</p>

가장 작은 소인수를 구해서 나누는 이 과정을 반복하면, 마지막에 N&ast; = p<sub>n</sub><sup>e<sub>n</sub></sup>을 얻게 된다.<br>
이제 p<sub>n</sub>은 N&ast;의 가장 작은 소인수가 되었으므로, 쉽게 구할 수 있다.
