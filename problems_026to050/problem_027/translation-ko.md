## 27. Quadratic primes

오일러는 놀라운 2차 식을 발견하였다.

<p align="center">
  <img
    src="https://latex.codecogs.com/svg.latex?n%5E%7B2%7D%20&plus;%20n%20&plus;%2041"
    alt="n^{2} + n + 41"
  >
</p>

위 식은 연속되는 정수 ![0 \leq n \leq 39](https://latex.codecogs.com/svg.latex?0%20%5Cleq%20n%20%5Cleq%2039) 에 대하여 총 40개의 소수를 만들어낸다. 하지만 ![n = 40](https://latex.codecogs.com/svg.latex?n%20%3D%2040) 인 경우 ![40^{2} + 40 + 41 = 40(40 + 1) + 41](https://latex.codecogs.com/svg.latex?40%5E%7B2%7D%20&plus;%2040%20&plus;%2041%20%3D%2040%2840%20&plus;%201%29%20&plus;%2041) 은 41로 나눌 수 있고, ![n = 41](https://latex.codecogs.com/svg.latex?n%20%3D%2041) 인 경우 ![41^{2} + 41 + 41](https://latex.codecogs.com/svg.latex?41%5E%7B2%7D%20&plus;%2041%20&plus;%2041) 은 분명히 41로 나눌 수 있다.

또 다른 엄청난 2차 식 ![n^{2} - 79n + 1601](https://latex.codecogs.com/svg.latex?n%5E%7B2%7D%20-%2079n%20&plus;%201601) 이 발견되었는데, 이 식은 연속되는 정수 ![0 \leq n \leq 79](https://latex.codecogs.com/svg.latex?0%20%5Cleq%20n%20%5Cleq%2079) 에 대하여 총 80개의 소수를 만들어낸다. 이 식의 계수들의 곱을 구하면 &minus;79 &times; 1601 = &minus;126479 이다.

다음과 같은 2차 식을 생각해보자.

> ![n^{2} + an + b](https://latex.codecogs.com/svg.latex?n%5E%7B2%7D%20&plus;%20an%20&plus;%20b) (단, ![\left | a \right | < 1000](https://latex.codecogs.com/svg.latex?%5Cleft%20%7C%20a%20%5Cright%20%7C%20%3C%201000) 이고 ![\left | b \right | \leq 1000](https://latex.codecogs.com/svg.latex?%5Cleft%20%7C%20b%20%5Cright%20%7C%20%5Cleq%201000) 이다.)<br>
> <br>
> 여기서 ![\left | n \right |](https://latex.codecogs.com/svg.latex?%5Cleft%20%7C%20n%20%5Cright%20%7C) 은 ![n](https://latex.codecogs.com/svg.latex?n) 의 절대값이다.<br>
> 예를 들면, ![\left | 11 \right | = 11](https://latex.codecogs.com/svg.latex?%5Cleft%20%7C%2011%20%5Cright%20%7C%20%3D%2011) 이고 ![\left | -4 \right | = 4](https://latex.codecogs.com/svg.latex?%5Cleft%20%7C%20-4%20%5Cright%20%7C%20%3D%204) 이다.

![n = 0](https://latex.codecogs.com/svg.latex?n%20%3D%200)부터 시작해서 연속되는 정수 ![n](https://latex.codecogs.com/svg.latex?n) 에 대하여 가장 많은 소수를 만들어내는 2차 식을 찾고, 그 식의 계수들(=![a](https://latex.codecogs.com/svg.latex?a)와 ![b](https://latex.codecogs.com/svg.latex?b))의 곱을 구하여라.
