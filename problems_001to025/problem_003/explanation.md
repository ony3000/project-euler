## 3. Largest prime factor

정수 N이 다음과 같이 소인수분해 된다고 하자.

![\large N = p_{1}^{e_{1}} p_{2}^{e_{2}} \cdots p_{n}^{e_{n}}](https://latex.codecogs.com/png.latex?\large&space;N&space;=&space;p_{1}^{e_{1}}&space;p_{2}^{e_{2}}&space;\cdots&space;p_{n}^{e_{n}})
(![\large p_{k}](https://latex.codecogs.com/png.latex?\large&space;p_{k})는 소수, ![\large e_{k}](https://latex.codecogs.com/png.latex?\large&space;e_{k})는 자연수, ![\large p_{1} < p_{2} < \cdots < p_{n}](https://latex.codecogs.com/png.latex?\large&space;p_{1}&space;<&space;p_{2}&space;<&space;\cdots&space;<&space;p_{n}))

문제의 답은 ![\large p_{n}](https://latex.codecogs.com/png.latex?\large&space;p_{n})이지만, 직접 구하는 것은 비효율적이다.

이 때 ![\large p_{1}](https://latex.codecogs.com/png.latex?\large&space;p_{1}), 즉 가장 작은 소인수는 비교적 쉽게 구할 수 있으므로,<br>
N의 약수 중 ![\large p_{1}](https://latex.codecogs.com/png.latex?\large&space;p_{1})을 인수로 갖지 않는 가장 큰 약수 N'을 생각해볼 수 있다.

![\large {N}' = \frac{N}{p_{1}^{e_{1}}} = p_{2}^{e_{2}} p_{3}^{e_{3}} \cdots p_{n}^{e_{n}}](https://latex.codecogs.com/png.latex?\large&space;{N}'&space;=&space;\frac{N}{p_{1}^{e_{1}}}&space;=&space;p_{2}^{e_{2}}&space;p_{3}^{e_{3}}&space;\cdots&space;p_{n}^{e_{n}})

그러면 N'의 가장 작은 소인수는 ![\large p_{2}](https://latex.codecogs.com/png.latex?\large&space;p_{2})가 되고,<br>
같은 방법으로, N'의 약수 중 ![\large p_{2}](https://latex.codecogs.com/png.latex?\large&space;p_{2})를 인수로 갖지 않는 가장 큰 약수 N''을 생각해볼 수 있다.

![\large {N}'' = \frac{{N}'}{p_{2}^{e_{2}}} = p_{3}^{e_{3}} \cdots p_{n}^{e_{n}}](https://latex.codecogs.com/png.latex?\large&space;{N}''&space;=&space;\frac{{N}'}{p_{2}^{e_{2}}}&space;=&space;p_{3}^{e_{3}}&space;\cdots&space;p_{n}^{e_{n}})

가장 작은 소인수를 구해서 나누는 이 과정을 반복하면, 마지막에 ![\large N^{\ast} = p_{n}^{e_{n}}](https://latex.codecogs.com/png.latex?\large&space;N^{\ast}&space;=&space;p_{n}^{e_{n}})을 얻게 된다.<br>
이제 ![\large p_{n}](https://latex.codecogs.com/png.latex?\large&space;p_{n})은 N*의 가장 작은 소인수가 되었으므로, 쉽게 구할 수 있다.
