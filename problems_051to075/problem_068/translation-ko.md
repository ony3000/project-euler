## 68. Magic 5-gon ring

마방진과 비슷한 삼각 고리에 1부터 6까지 채웠다. 각 변에 놓인 수를 합하면 9가 된다.

<p align="center">
  <img
    src="./p068_1.png"
    alt="Filled 3-gon ring"
  >
</p>

고리 바깥쪽의 수 중에서 가장 작은 값이 있는 변에 놓인 수의 그룹(이 예시에서는 4,3,2)부터 시작하여, **시계 방향**으로 돌면서 나머지 변에 놓인 수의 그룹을 읽으면, 각 풀이를 고유하게 설명할 수 있다. 예를 들어, 위 풀이는 집합 {4,3,2; 6,2,1; 5,1,3}으로 설명할 수 있다.

삼각 고리는 네 가지 합계 9, 10, 11, 12로 완성할 수 있다. 총 여덟 가지 풀이가 있다.

합계 | 풀이 집합
:---: | :---:
9 | 4,2,3; 5,3,1; 6,1,2
9 | 4,3,2; 6,2,1; 5,1,3
10 | 2,3,5; 4,5,1; 6,1,3
10 | 2,5,3; 6,3,1; 4,1,5
11 | 1,4,6; 3,6,2; 5,2,4
11 | 1,6,4; 5,4,2; 3,2,6
12 | 1,5,6; 2,6,4; 3,4,5
12 | 1,6,5; 3,5,4; 2,4,6

각 풀이 집합의 수를 이어붙이면 아홉 자리 수를 만들 수 있다. 삼각 고리에 대한 가장 큰 아홉 자리 수는 432621513이다.

다음 오각 고리에 1부터 10까지 채우면, 풀이 집합의 배치에 따라 열여섯 자리 또는 열일곱 자리 수를 만들 수 있다. 오각 고리에 대한 가장 큰 **열여섯 자리** 수를 구하여라.

<p align="center">
  <img
    src="./p068_2.png"
    alt="Empty 5-gon ring"
  >
</p>
