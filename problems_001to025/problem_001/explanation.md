## 1. Multiples of 3 and 5

포함-배제의 원리를 이용하자.

1. 3의 배수들의 합을 구한다.
2. (1)과 별도로 5의 배수들의 합을 구한다.

15는 3과 5의 최소공배수이므로, 15의 배수들의 합은 (1)과 (2)에 중복 계산되어있다.

따라서, 중복 계산된 값을 빼주면 문제의 답을 얻을 수 있고, 계산식은 다음과 같다.

![\large \sum_{k=1}^{\left \lfloor \frac{999}{3} \right \rfloor} 3k + \sum_{k=1}^{\left \lfloor \frac{999}{5} \right \rfloor} 5k - \sum_{k=1}^{\left \lfloor \frac{999}{15} \right \rfloor} 15k](https://latex.codecogs.com/png.latex?\large&space;\sum_{k=1}^{\left&space;\lfloor&space;\frac{999}{3}&space;\right&space;\rfloor}&space;3k&space;&plus;&space;\sum_{k=1}^{\left&space;\lfloor&space;\frac{999}{5}&space;\right&space;\rfloor}&space;5k&space;-&space;\sum_{k=1}^{\left&space;\lfloor&space;\frac{999}{15}&space;\right&space;\rfloor}&space;15k)
