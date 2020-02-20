## 12. Highly divisible triangular number

1보다 큰 정수 N이 다음과 같이 소인수분해 된다고 하자.

<p align="center">
  N = p<sub>1</sub><sup>e<sub>1</sub></sup>p<sub>2</sub><sup>e<sub>2</sub></sup> &ctdot; p<sub>n</sub><sup>e<sub>n</sub></sup> (단, p<sub>k</sub>는 소수, e<sub>k</sub>는 자연수, p<sub>1</sub> &lt; p<sub>2</sub> &lt; &ctdot; &lt; p<sub>n</sub> 이다.)
</p>

그러면 N의 약수의 개수는 다음과 같이 계산할 수 있다.

<p align="center">
  (1 + e<sub>1</sub>)(1 + e<sub>2</sub>) &ctdot; (1 + e<sub>n</sub>)
</p>

3번 문제를 먼저 풀어봤다면, **가장 작은 소인수를 구하는** 알고리즘을 응용하여 소인수분해를 구현할 수 있다.
