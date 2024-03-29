## 90. Cube digit pairs

정육면체의 각 면에는 서로 다른 숫자(0부터 9까지)가 쓰여있다. 두 번째 정육면체도 동일하다. 두 개의 정육면체를 서로 다른 위치에 나란히 놓으면, 다양한 두 자리 수를 만들 수 있다.

예를 들어, 제곱수 64는 다음과 같이 만들 수 있다.

<p align="center">
  <img
    src="./p090.png"
    alt="Image of cubes"
  >
</p>

사실, 각 정육면체에 쓰일 숫자를 잘 선택하면, 100 미만의 모든 제곱수(01, 04, 09, 16, 25, 36, 49, 64, 81)를 표현할 수 있다.

한 가지 예를 들면, 첫 번째 정육면체에는 {0, 5, 6, 7, 8, 9}를 쓰고, 두 번째 정육면체에는 {1, 2, 3, 4, 8, 9}를 쓰면 된다.

이 문제에서는 6을 뒤집어서 9로 만드는 것을 허용하고 있기 때문에, {0, 5, 6, 7, 8, 9}와 {1, 2, 3, 4, 6, 7} 조합으로도 모든 제곱수를 표현할 수 있다. 뒤집기를 허용하지 않으면 이 조합에서 09를 얻을 수 없다.

정육면체에 쓰일 숫자 조합을 결정할 때, 그 숫자들의 순서는 별로 중요하지 않다.

> {1, 2, 3, 4, 5, 6}은 {3, 6, 4, 1, 2, 5}와 동일하다.<br>
> {1, 2, 3, 4, 5, 6}은 {1, 2, 3, 4, 5, 9}와 다르다.

우리는 뒤집기를 허용하고 있기 때문에, 마지막 예시의 두 집합은 모두 확장된 집합 {1, 2, 3, 4, 5, 6, 9}를 나타낸다.

정육면체에 쓸 수 있는 숫자 조합들 중, 중복되는 조합을 제외하고, 모든 제곱수를 표현할 수 있는 조합의 개수를 구하여라.
