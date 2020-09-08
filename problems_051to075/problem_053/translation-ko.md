## 53. Combinatoric selections

다섯 자리 수 12345에서, 숫자 세 개를 선택하는 방법은 다음 열 가지가 있다.

<p align="center">
  123, 124, 125, 134, 135, 145, 234, 235, 245, 345
</p>

조합론에서는, 이러한 방법의 수를 **이항 계수**라 하고, ![\binom{5}{3} = 10](https://latex.codecogs.com/svg.latex?%5Cbinom%7B5%7D%7B3%7D%20%3D%2010) 과 같이 표기한다.

일반적으로, 음이 아닌 정수 ![r \leq n](https://latex.codecogs.com/svg.latex?r%20%5Cleq%20n) 에 대해서, ![\binom{n}{r} = \frac{n!}{r!(n-r)!}](https://latex.codecogs.com/svg.latex?%5Cbinom%7Bn%7D%7Br%7D%20%3D%20%5Cfrac%7Bn%21%7D%7Br%21%28n-r%29%21%7D) 이다.<br>
이 때, ![n! = n \times (n-1) \times ... \times 3 \times 2 \times 1](https://latex.codecogs.com/svg.latex?n%21%20%3D%20n%20%5Ctimes%20%28n-1%29%20%5Ctimes%20...%20%5Ctimes%203%20%5Ctimes%202%20%5Ctimes%201) 이고, ![0! = 1](https://latex.codecogs.com/svg.latex?0%21%20%3D%201) 이다.

이 이항 계수의 값은, ![n = 23](https://latex.codecogs.com/svg.latex?n%20%3D%2023) 일 때, 처음으로 100만을 초과하는 값 ![\binom{23}{10} = 1144066](https://latex.codecogs.com/svg.latex?%5Cbinom%7B23%7D%7B10%7D%20%3D%201144066) 이 등장한다.

![1 \leq n \leq 100](https://latex.codecogs.com/svg.latex?1%20%5Cleq%20n%20%5Cleq%20100) 에 대해서, 100만을 초과하는 이항 계수 ![\binom{n}{r}](https://latex.codecogs.com/svg.latex?%5Cbinom%7Bn%7D%7Br%7D) 의 개수(값이 중복되어도 상관없다.)를 구하여라.
