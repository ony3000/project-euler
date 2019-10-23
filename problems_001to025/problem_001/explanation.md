## 1. Multiples of 3 and 5

포함-배제의 원리를 이용하자.

1. 3의 배수들의 합을 구한다.
2. (1)과 별도로 5의 배수들의 합을 구한다.

15는 3과 5의 최소공배수이므로, 15의 배수들의 합은 (1)과 (2)에 중복 계산되어있다.

따라서, 중복 계산된 값을 빼주면 문제의 답을 얻을 수 있고, 계산식은 다음과 같다.

<p align="center">
  <img src="https://latex.codecogs.com/png.latex?%5Clarge%20%5Csum_%7Bk%3D1%7D%5E%7B%5Cleft%20%5Clfloor%20%5Cfrac%7B999%7D%7B3%7D%20%5Cright%20%5Crfloor%7D%203k%20&plus;%20%5Csum_%7Bk%3D1%7D%5E%7B%5Cleft%20%5Clfloor%20%5Cfrac%7B999%7D%7B5%7D%20%5Cright%20%5Crfloor%7D%205k%20-%20%5Csum_%7Bk%3D1%7D%5E%7B%5Cleft%20%5Clfloor%20%5Cfrac%7B999%7D%7B15%7D%20%5Cright%20%5Crfloor%7D%2015k" width="263" height="75">
</p>
