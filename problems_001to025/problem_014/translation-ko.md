## 14. Longest Collatz sequence

자연수 집합에서 정의되는 다음과 같은 수열이 있다.

> <var>n</var>이 짝수일 때: <var>n</var> &rarr; <var>n</var>/2<br>
> <var>n</var>이 홀수일 때: <var>n</var> &rarr; 3<var>n</var>+1

위 규칙을 이용하여 첫 번째 항이 13인 수열을 만들면,

<p align="center">
  13 &rarr; 40 &rarr; 20 &rarr; 10 &rarr; 5 &rarr; 16 &rarr; 8 &rarr; 4 &rarr; 2 &rarr; 1
</p>

이 수열(13으로 시작해서 1로 끝나는)이 열 개 항으로 이루어진 것을 알 수 있다. 아직 증명되지는 않았지만(Collatz Problem), 이 수열은 첫 번째 항에 무관하게 1로 끝낼 수 있을 것이다.

100만 미만의 숫자들 중, 가장 긴 수열을 만들어내는 첫 번째 항을 구하여라.

**참고**: 만들어지는 항이 100만을 초과하는 것은 허용된다.
