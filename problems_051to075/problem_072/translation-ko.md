## 72. Counting fractions

양의 정수 <var>n</var>과 <var>d</var>에 대해서, 분수 <var>n</var>/<var>d</var>을 생각해보자. 만약 <var>n</var><<var>d</var> 이고 HCF[^1](<var>n</var>,<var>d</var>)=1 이면, 그 때의 분수를 기약 진분수라고 한다.

[^1]: 최대 공약수. 보통 GCD(Greatest Common Divisor)라는 표현을 많이 쓰는데, 여기서는 HCF(Highest Common Factor)를 사용했다.

<var>d</var> &le; 8 인 기약 진분수들을 오름차순으로 나열하면 다음과 같다.

<p align="center">
  1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8
</p>

여기서 기약 진분수가 스물 한 개임을 알 수 있다.

<var>d</var> &le; 1,000,000 인 기약 진분수들의 개수를 구하여라.
