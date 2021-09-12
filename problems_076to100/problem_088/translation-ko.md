## 88. Product-sum numbers

자연수 N을, 두 개 이상의 자연수로 구성된 집합 {<var>a</var><sub>1</sub>, <var>a</var><sub>2</sub>, ... , <var>a</var><sub><var>k</var></sub>}의 원소들의 합으로 표현(N = <var>a</var><sub>1</sub> + <var>a</var><sub>2</sub> + ... + <var>a</var><sub><var>k</var></sub>)할 수 있고 곱으로도 표현(N = <var>a</var><sub>1</sub> &times; <var>a</var><sub>2</sub> &times; ... &times; <var>a</var><sub><var>k</var></sub>)할 수 있으면, 그 때의 N을 곱합수라 하자.

예를 들어, 6 = 1 + 2 + 3 = 1 &times; 2 &times; 3 이다.

주어진 집합의 크기 <var>k</var>에 대해서, 이런 성질을 만족하는 가장 작은 N을 최소곱합수라 하자. <var>k</var> = 2, 3, 4, 5, 6 에 대한 최소곱합수들은 다음과 같다.

> <var>k</var>=2: 4 = 2 &times; 2 = 2 + 2<br>
> <var>k</var>=3: 6 = 1 &times; 2 &times; 3 = 1 + 2 + 3<br>
> <var>k</var>=4: 8 = 1 &times; 1 &times; 2 &times; 4 = 1 + 1 + 2 + 4<br>
> <var>k</var>=5: 8 = 1 &times; 1 &times; 2 &times; 2 &times; 2 = 1 + 1 + 2 + 2 + 2<br>
> <var>k</var>=6: 12 = 1 &times; 1 &times; 1 &times; 1 &times; 2 &times; 6 = 1 + 1 + 1 + 1 + 2 + 6

따라서 2&le;<var>k</var>&le;6 일 때, 모든 최소곱합수들의 합을 구하면 4+6+8+12 = 30 이다. 이 때, 8을 한 번만 세었다는 것에 주의하라.

실제로, 2&le;<var>k</var>&le;12 일 때 최소곱합수들의 집합은 {4, 6, 8, 12, 15, 16}이고, 이 때의 합은 61이다.

2&le;<var>k</var>&le;12000 일 때, 모든 최소곱합수들의 합을 구하여라.
