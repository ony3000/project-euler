## 64. Odd period square roots

모든 제곱근은 연분수로 표현했을 때 주기적이고, 다음과 같은 형태로 표현할 수 있다.

![\sqrt{N} = a_{0} + \frac{1}{a_{1} + \frac{1}{a_{2} + \frac{1}{a_{3} + ...}}}](https://latex.codecogs.com/svg.latex?%5Csqrt%7BN%7D%20%3D%20a_%7B0%7D%20&plus;%20%5Cfrac%7B1%7D%7Ba_%7B1%7D%20&plus;%20%5Cfrac%7B1%7D%7Ba_%7B2%7D%20&plus;%20%5Cfrac%7B1%7D%7Ba_%7B3%7D%20&plus;%20...%7D%7D%7D)

예를 들어, ![\sqrt{23}](https://latex.codecogs.com/svg.latex?%5Csqrt%7B23%7D)을 생각해보자.

![\sqrt{23} = 4 + \sqrt{23} - 4 = 4 + \frac{1}{\frac{1}{\sqrt{23} - 4}} = 4 + \frac{1}{1 + \frac{\sqrt{23} - 3}{7}}](https://latex.codecogs.com/svg.latex?%5Csqrt%7B23%7D%20%3D%204%20&plus;%20%5Csqrt%7B23%7D%20-%204%20%3D%204%20&plus;%20%5Cfrac%7B1%7D%7B%5Cfrac%7B1%7D%7B%5Csqrt%7B23%7D%20-%204%7D%7D%20%3D%204%20&plus;%20%5Cfrac%7B1%7D%7B1%20&plus;%20%5Cfrac%7B%5Csqrt%7B23%7D%20-%203%7D%7B7%7D%7D)

위와 같은 방법으로 연분수를 계속 전개하면 다음과 같은 형태가 된다.

![\sqrt{23} = 4 + \frac{1}{1 + \frac{1}{3 + \frac{1}{1 + \frac{1}{8 + ...}}}}](https://latex.codecogs.com/svg.latex?%5Csqrt%7B23%7D%20%3D%204%20&plus;%20%5Cfrac%7B1%7D%7B1%20&plus;%20%5Cfrac%7B1%7D%7B3%20&plus;%20%5Cfrac%7B1%7D%7B1%20&plus;%20%5Cfrac%7B1%7D%7B8%20&plus;%20...%7D%7D%7D%7D)

전개 과정은 다음과 같이 요약할 수 있고,

![a_{0} = 4, \frac{1}{\sqrt{23} - 4} = \frac{\sqrt{23} + 4}{7} = 1 + \frac{\sqrt{23} - 3}{7}](https://latex.codecogs.com/svg.latex?a_%7B0%7D%20%3D%204%2C%20%5Cfrac%7B1%7D%7B%5Csqrt%7B23%7D%20-%204%7D%20%3D%20%5Cfrac%7B%5Csqrt%7B23%7D%20&plus;%204%7D%7B7%7D%20%3D%201%20&plus;%20%5Cfrac%7B%5Csqrt%7B23%7D%20-%203%7D%7B7%7D)<br>
![a_{1} = 1, \frac{7}{\sqrt{23} - 3} = \frac{7(\sqrt{23} + 3)}{14} = 3 + \frac{\sqrt{23} - 3}{2}](https://latex.codecogs.com/svg.latex?a_%7B1%7D%20%3D%201%2C%20%5Cfrac%7B7%7D%7B%5Csqrt%7B23%7D%20-%203%7D%20%3D%20%5Cfrac%7B7%28%5Csqrt%7B23%7D%20&plus;%203%29%7D%7B14%7D%20%3D%203%20&plus;%20%5Cfrac%7B%5Csqrt%7B23%7D%20-%203%7D%7B2%7D)<br>
![a_{2} = 3, \frac{2}{\sqrt{23} - 3} = \frac{2(\sqrt{23} + 3)}{14} = 1 + \frac{\sqrt{23} - 4}{7}](https://latex.codecogs.com/svg.latex?a_%7B2%7D%20%3D%203%2C%20%5Cfrac%7B2%7D%7B%5Csqrt%7B23%7D%20-%203%7D%20%3D%20%5Cfrac%7B2%28%5Csqrt%7B23%7D%20&plus;%203%29%7D%7B14%7D%20%3D%201%20&plus;%20%5Cfrac%7B%5Csqrt%7B23%7D%20-%204%7D%7B7%7D)<br>
![a_{3} = 1, \frac{7}{\sqrt{23} - 4} = \frac{7(\sqrt{23} + 4)}{7} = 8 + \sqrt{23} - 4](https://latex.codecogs.com/svg.latex?a_%7B3%7D%20%3D%201%2C%20%5Cfrac%7B7%7D%7B%5Csqrt%7B23%7D%20-%204%7D%20%3D%20%5Cfrac%7B7%28%5Csqrt%7B23%7D%20&plus;%204%29%7D%7B7%7D%20%3D%208%20&plus;%20%5Csqrt%7B23%7D%20-%204)<br>
![a_{4} = 8, \frac{1}{\sqrt{23} - 4} = \frac{\sqrt{23} + 4}{7} = 1 + \frac{\sqrt{23} - 3}{7}](https://latex.codecogs.com/svg.latex?a_%7B4%7D%20%3D%208%2C%20%5Cfrac%7B1%7D%7B%5Csqrt%7B23%7D%20-%204%7D%20%3D%20%5Cfrac%7B%5Csqrt%7B23%7D%20&plus;%204%7D%7B7%7D%20%3D%201%20&plus;%20%5Cfrac%7B%5Csqrt%7B23%7D%20-%203%7D%7B7%7D)<br>
![a_{5} = 1, \frac{7}{\sqrt{23} - 3} = \frac{7(\sqrt{23} + 3)}{14} = 3 + \frac{\sqrt{23} - 3}{2}](https://latex.codecogs.com/svg.latex?a_%7B5%7D%20%3D%201%2C%20%5Cfrac%7B7%7D%7B%5Csqrt%7B23%7D%20-%203%7D%20%3D%20%5Cfrac%7B7%28%5Csqrt%7B23%7D%20&plus;%203%29%7D%7B14%7D%20%3D%203%20&plus;%20%5Cfrac%7B%5Csqrt%7B23%7D%20-%203%7D%7B2%7D)<br>
![a_{6} = 3, \frac{2}{\sqrt{23} - 3} = \frac{2(\sqrt{23} + 3)}{14} = 1 + \frac{\sqrt{23} - 4}{7}](https://latex.codecogs.com/svg.latex?a_%7B6%7D%20%3D%203%2C%20%5Cfrac%7B2%7D%7B%5Csqrt%7B23%7D%20-%203%7D%20%3D%20%5Cfrac%7B2%28%5Csqrt%7B23%7D%20&plus;%203%29%7D%7B14%7D%20%3D%201%20&plus;%20%5Cfrac%7B%5Csqrt%7B23%7D%20-%204%7D%7B7%7D)<br>
![a_{7} = 1, \frac{7}{\sqrt{23} - 4} = \frac{7(\sqrt{23} + 4)}{7} = 8 + \sqrt{23} - 4](https://latex.codecogs.com/svg.latex?a_%7B7%7D%20%3D%201%2C%20%5Cfrac%7B7%7D%7B%5Csqrt%7B23%7D%20-%204%7D%20%3D%20%5Cfrac%7B7%28%5Csqrt%7B23%7D%20&plus;%204%29%7D%7B7%7D%20%3D%208%20&plus;%20%5Csqrt%7B23%7D%20-%204)

이 과정에서 나타나는 수열이 반복되는 것을 알 수 있다. 간결함을 위해, ![\sqrt{23} = [4; (1, 3, 1, 8)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B23%7D%20%3D%20%5B4%3B%20%281%2C%203%2C%201%2C%208%29%5D) 과 같은 표기법을 사용할 것이다. 이 표기법은 연분수를 전개할 때 (1,3,1,8)이 무한히 반복됨을 나타낸다.

처음 열 개의 무리수 제곱근의 연분수 표현은 다음과 같다.

![\sqrt{2} = [1; (2)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B2%7D%20%3D%20%5B1%3B%20%282%29%5D), 주기=1<br>
![\sqrt{3} = [1; (1, 2)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B3%7D%20%3D%20%5B1%3B%20%281%2C%202%29%5D), 주기=2<br>
![\sqrt{5} = [2; (4)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B5%7D%20%3D%20%5B2%3B%20%284%29%5D), 주기=1<br>
![\sqrt{6} = [2; (2, 4)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B6%7D%20%3D%20%5B2%3B%20%282%2C%204%29%5D), 주기=2<br>
![\sqrt{7} = [2; (1, 1, 1, 4)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B7%7D%20%3D%20%5B2%3B%20%281%2C%201%2C%201%2C%204%29%5D), 주기=4<br>
![\sqrt{8} = [2; (1, 4)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B8%7D%20%3D%20%5B2%3B%20%281%2C%204%29%5D), 주기=2<br>
![\sqrt{10} = [3; (6)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B10%7D%20%3D%20%5B3%3B%20%286%29%5D), 주기=1<br>
![\sqrt{11} = [3; (3, 6)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B11%7D%20%3D%20%5B3%3B%20%283%2C%206%29%5D), 주기=2<br>
![\sqrt{12} = [3; (2, 6)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B12%7D%20%3D%20%5B3%3B%20%282%2C%206%29%5D), 주기=2<br>
![\sqrt{13} = [3; (1, 1, 1, 1, 6)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B13%7D%20%3D%20%5B3%3B%20%281%2C%201%2C%201%2C%201%2C%206%29%5D), 주기=5

![N \leq 13](https://latex.codecogs.com/svg.latex?N%20%5Cleq%2013) 에 대해, 정확히 네 개의 연분수가 홀수 주기를 갖는다.

![N \leq 10000](https://latex.codecogs.com/svg.latex?N%20%5Cleq%2010000) 에 대해, 홀수 주기를 갖는 연분수의 개수를 구하여라.
