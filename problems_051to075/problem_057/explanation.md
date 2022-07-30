## 57. Square root convergents

2의 제곱근을 연분수로 전개할 때, n번의 전개를 통해 얻어지는 값의 분자를 ![a_{n}](https://latex.codecogs.com/svg.latex?a_%7Bn%7D), 분모를 ![b_{n}](https://latex.codecogs.com/svg.latex?b_%7Bn%7D)이라 하자.

그러면 처음 네 번의 전개를 다음과 같이 쓸 수 있는데,

![\frac{a_{1}}{b_{1}} = \frac{3}{2} = 1 + \frac{1}{2}](https://latex.codecogs.com/svg.latex?%5Cfrac%7Ba_%7B1%7D%7D%7Bb_%7B1%7D%7D%20%3D%20%5Cfrac%7B3%7D%7B2%7D%20%3D%201%20&plus;%20%5Cfrac%7B1%7D%7B2%7D)<br>
![\frac{a_{2}}{b_{2}} = \frac{7}{5} = 1 + \frac{1}{2 + \frac{1}{2}}](https://latex.codecogs.com/svg.latex?%5Cfrac%7Ba_%7B2%7D%7D%7Bb_%7B2%7D%7D%20%3D%20%5Cfrac%7B7%7D%7B5%7D%20%3D%201%20&plus;%20%5Cfrac%7B1%7D%7B2%20&plus;%20%5Cfrac%7B1%7D%7B2%7D%7D)<br>
![\frac{a_{3}}{b_{3}} = \frac{17}{12} = 1 + \frac{1}{2 + \frac{1}{2 + \frac{1}{2}}}](https://latex.codecogs.com/svg.latex?%5Cfrac%7Ba_%7B3%7D%7D%7Bb_%7B3%7D%7D%20%3D%20%5Cfrac%7B17%7D%7B12%7D%20%3D%201%20&plus;%20%5Cfrac%7B1%7D%7B2%20&plus;%20%5Cfrac%7B1%7D%7B2%20&plus;%20%5Cfrac%7B1%7D%7B2%7D%7D%7D)<br>
![\frac{a_{4}}{b_{4}} = \frac{41}{29} = 1 + \frac{1}{2 + \frac{1}{2 + \frac{1}{2 + \frac{1}{2}}}}](https://latex.codecogs.com/svg.latex?%5Cfrac%7Ba_%7B4%7D%7D%7Bb_%7B4%7D%7D%20%3D%20%5Cfrac%7B41%7D%7B29%7D%20%3D%201%20&plus;%20%5Cfrac%7B1%7D%7B2%20&plus;%20%5Cfrac%7B1%7D%7B2%20&plus;%20%5Cfrac%7B1%7D%7B2%20&plus;%20%5Cfrac%7B1%7D%7B2%7D%7D%7D%7D)

여기서 반복적으로 나타나는 부분을 잘 살펴보면 ![\frac{a_{n+1}}{b_{n+1}} = 1 + \frac{1}{1 + \frac{a_{n}}{b_{n}}}](https://latex.codecogs.com/svg.latex?%5Cfrac%7Ba_%7Bn&plus;1%7D%7D%7Bb_%7Bn&plus;1%7D%7D%20%3D%201%20&plus;%20%5Cfrac%7B1%7D%7B1%20&plus;%20%5Cfrac%7Ba_%7Bn%7D%7D%7Bb_%7Bn%7D%7D%7D) 임을 알 수 있고, 우변을 보통의 분수 형태가 되도록 계산하면 ![\frac{a_{n+1}}{b_{n+1}} = \frac{a_{n} + 2b_{n}}{a_{n} + b_{n}}](https://latex.codecogs.com/svg.latex?%5Cfrac%7Ba_%7Bn&plus;1%7D%7D%7Bb_%7Bn&plus;1%7D%7D%20%3D%20%5Cfrac%7Ba_%7Bn%7D%20&plus;%202b_%7Bn%7D%7D%7Ba_%7Bn%7D%20&plus;%20b_%7Bn%7D%7D) 가 된다.

이 때, ![\frac{a_{n} + 2b_{n}}{a_{n} + b_{n}}](https://latex.codecogs.com/svg.latex?%5Cfrac%7Ba_%7Bn%7D%20&plus;%202b_%7Bn%7D%7D%7Ba_%7Bn%7D%20&plus;%20b_%7Bn%7D%7D) 은 약분되지 않으므로[^1] ![a_{n+1} = a_{n} + 2b_{n}](https://latex.codecogs.com/svg.latex?a_%7Bn&plus;1%7D%20%3D%20a_%7Bn%7D%20&plus;%202b_%7Bn%7D), ![b_{n+1} = a_{n} + b_{n}](https://latex.codecogs.com/svg.latex?b_%7Bn&plus;1%7D%20%3D%20a_%7Bn%7D%20&plus;%20b_%7Bn%7D) 이라 할 수 있고, ![a_{0} = b_{0} = 1](https://latex.codecogs.com/svg.latex?a_%7B0%7D%20%3D%20b_%7B0%7D%20%3D%201) 로 정의하면, 첫 번째 전개의 분자와 분모도 공식을 통해 얻어낼 수 있다.

[^1]: 수학적 귀납법으로 증명할 수 있다.

이제 공식을 사용해서 천 번의 분자와 분모를 계산하고, 분자의 자리수가 분모의 자리수보다 많아지는 횟수만 세면 된다.
