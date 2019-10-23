## 3. Largest prime factor

정수 N이 다음과 같이 소인수분해 된다고 하자.

<p align="center">
  <img src="https://latex.codecogs.com/png.latex?%5Clarge%20N%20%3D%20p_%7B1%7D%5E%7Be_%7B1%7D%7D%20p_%7B2%7D%5E%7Be_%7B2%7D%7D%20%5Ccdots%20p_%7Bn%7D%5E%7Be_%7Bn%7D%7D" width="156" height="23"> (<img src="https://latex.codecogs.com/png.latex?%5Clarge%20p_%7Bk%7D" width="20" height="14">는 소수, <img src="https://latex.codecogs.com/png.latex?%5Clarge%20e_%7Bk%7D" width="18" height="14">는 자연수, <img src="https://latex.codecogs.com/png.latex?%5Clarge%20p_%7B1%7D%20%3C%20p_%7B2%7D%20%3C%20%5Ccdots%20%3C%20p_%7Bn%7D" width="172" height="18">)
</p>

문제의 답은 ![\large p_{n}](https://latex.codecogs.com/png.latex?%5Clarge%20p_%7Bn%7D)이지만, 직접 구하는 것은 비효율적이다.

이 때 ![\large p_{1}](https://latex.codecogs.com/png.latex?%5Clarge%20p_%7B1%7D), 즉 가장 작은 소인수는 비교적 쉽게 구할 수 있으므로,<br>
N의 약수 중 ![\large p_{1}](https://latex.codecogs.com/png.latex?%5Clarge%20p_%7B1%7D)을 인수로 갖지 않는 가장 큰 약수 N'을 생각해볼 수 있다.

<p align="center">
  <img src="https://latex.codecogs.com/png.latex?%5Clarge%20%7BN%7D%27%20%3D%20%5Cfrac%7BN%7D%7Bp_%7B1%7D%5E%7Be_%7B1%7D%7D%7D%20%3D%20p_%7B2%7D%5E%7Be_%7B2%7D%7D%20p_%7B3%7D%5E%7Be_%7B3%7D%7D%20%5Ccdots%20p_%7Bn%7D%5E%7Be_%7Bn%7D%7D" width="219" height="52">
</p>

그러면 N'의 가장 작은 소인수는 ![\large p_{2}](https://latex.codecogs.com/png.latex?%5Clarge%20p_%7B2%7D)가 되고,<br>
같은 방법으로, N'의 약수 중 ![\large p_{2}](https://latex.codecogs.com/png.latex?%5Clarge%20p_%7B2%7D)를 인수로 갖지 않는 가장 큰 약수 N''을 생각해볼 수 있다.

<p align="center">
  <img src="https://latex.codecogs.com/png.latex?%5Clarge%20%7BN%7D%27%27%20%3D%20%5Cfrac%7B%7BN%7D%27%7D%7Bp_%7B2%7D%5E%7Be_%7B2%7D%7D%7D%20%3D%20p_%7B3%7D%5E%7Be_%7B3%7D%7D%20%5Ccdots%20p_%7Bn%7D%5E%7Be_%7Bn%7D%7D" width="198" height="52">
</p>

가장 작은 소인수를 구해서 나누는 이 과정을 반복하면, 마지막에 ![\large N^{\ast} = p_{n}^{e_{n}}](https://latex.codecogs.com/png.latex?%5Clarge%20N%5E%7B%5Cast%7D%20%3D%20p_%7Bn%7D%5E%7Be_%7Bn%7D%7D)을 얻게 된다.<br>
이제 ![\large p_{n}](https://latex.codecogs.com/png.latex?%5Clarge%20p_%7Bn%7D)은 N*의 가장 작은 소인수가 되었으므로, 쉽게 구할 수 있다.
