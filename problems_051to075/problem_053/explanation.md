## 53. Combinatoric selections

주어진 이항 계수 공식을 바탕으로, 1 &le; n &le; 100 에 대해서 이항 계수를 구하고, 그 값이 100만보다 큰지 비교하기만 하면 된다.

이항 계수는 다음과 같은 대칭성을 가지므로,

<p align="center">
  <img src="https://latex.codecogs.com/svg.latex?%5Cbinom%7Bn%7D%7Br%7D%20%3D%20%5Cbinom%7Bn%7D%7Bn-r%7D" width="125" height="43" alt="\binom{n}{r} = \binom{n}{n-r}">
</p>

특정 n에 대해서 이항 계수를 구할 때, 0 &le; r &le; <sup>n</sup>/<sub>2</sub> 만큼만 구하면 된다.

즉, 위에서 언급한 대칭성에 의해, 어떤 이항 계수 ![\binom{n}{r}](https://latex.codecogs.com/svg.latex?%5Cbinom%7Bn%7D%7Br%7D) 이 100만을 초과한다면, ![\binom{n}{n-r}](https://latex.codecogs.com/svg.latex?%5Cbinom%7Bn%7D%7Bn-r%7D) 은 검사를 건너뛰고 둘 다 확인한 것으로 간주해도 된다.

단, 문제에서 언급한 **값이 중복되어도 상관없다**(원문: not necessarily distinct) 의 의미는

<p align="center">
  <img src="https://latex.codecogs.com/svg.latex?n_%7B1%7D%20%5Cneq%20n_%7B2%7D" width="58" height="17" alt="n_{1} \neq n_{2}"> 또는 <img src="https://latex.codecogs.com/svg.latex?r_%7B1%7D%20%5Cneq%20r_%7B2%7D" width="52" height="17" alt="r_{1} \neq r_{2}"> 일 때 <img src="https://latex.codecogs.com/svg.latex?%5Cbinom%7Bn_%7B1%7D%7D%7Br_%7B1%7D%7D%20%3D%20%5Cbinom%7Bn_%7B2%7D%7D%7Br_%7B2%7D%7D" width="108" height="43" alt="\binom{n_{1}}{r_{1}} = \binom{n_{2}}{r_{2}}"> 이면, 두 이항 계수를 따로 셈한다.
</p>

이므로, n이 짝수일 때 r = <sup>n</sup>/<sub>2</sub> 이면 ![\binom{n}{r}](https://latex.codecogs.com/svg.latex?%5Cbinom%7Bn%7D%7Br%7D) 과 ![\binom{n}{n-r}](https://latex.codecogs.com/svg.latex?%5Cbinom%7Bn%7D%7Bn-r%7D) 을 하나로 간주해야 한다.
