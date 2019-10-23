## 12. Highly divisible triangular number

1보다 큰 정수 N이 다음과 같이 소인수분해 된다고 하자.

<p align="center">
  <img src="https://latex.codecogs.com/png.latex?%5Clarge%20N%20%3D%20p_%7B1%7D%5E%7Be_%7B1%7D%7D%20p_%7B2%7D%5E%7Be_%7B2%7D%7D%20%5Ccdots%20p_%7Bn%7D%5E%7Be_%7Bn%7D%7D" width="156" height="23"> (<img src="https://latex.codecogs.com/png.latex?%5Clarge%20p_%7Bk%7D" width="20" height="14">는 소수, <img src="https://latex.codecogs.com/png.latex?%5Clarge%20e_%7Bk%7D" width="18" height="14">는 자연수, <img src="https://latex.codecogs.com/png.latex?%5Clarge%20p_%7B1%7D%20%3C%20p_%7B2%7D%20%3C%20%5Ccdots%20%3C%20p_%7Bn%7D" width="172" height="18">)
</p>

그러면 N의 약수의 개수는 다음과 같이 계산할 수 있다.

<p align="center">
  <img src="https://latex.codecogs.com/png.latex?%5Clarge%20%5Cprod_%7Bk%3D1%7D%5E%7Bn%7D%20%281%20&plus;%20e_%7Bk%7D%29" width="100" height="62">
</p>

3번 문제를 먼저 풀어봤다면, **가장 작은 소인수를 구하는** 알고리즘을 응용하여 소인수분해를 구현할 수 있다.
