## 14. Longest Collatz sequence

**첫 번째 항을 n으로 시작했을 때, 만들어지는 수열의 길이**를 s<sub>n</sub>이라 하자.

처음 몇 개의 s<sub>n</sub>을 구해보면 다음과 같다.

* n = 1: 첫 번째 항이 1이므로 다른 항을 계산할 필요가 없다. s<sub>1</sub> = 1 이다.
* n = 2: 2 &rarr; 1 로 전개된다. s<sub>2</sub> = 2 이다.
* n = 3: 3 &rarr; 10 &rarr; 5 &rarr; 16 &rarr; 8 &rarr; 4 &rarr; 2 &rarr; 1 로 전개된다. s<sub>3</sub> = 8 이다.
* n = 4: 4 &rarr; 2 &rarr; 1 로 전개된다. s<sub>4</sub> = 3 이다.
* n = 5: 5 &rarr; 16 &rarr; 8 &rarr; 4 &rarr; 2 &rarr; 1 로 전개된다. s<sub>5</sub> = 6 이다.
* n = 6: 6 &rarr; 3 &rarr; 10 &rarr; 5 &rarr; 16 &rarr; 8 &rarr; 4 &rarr; 2 &rarr; 1 로 전개된다. s<sub>6</sub> = 9 이다.

여기서 우리는 같은 값을 가지는 항이 여러 번 계산되고 있음을 알 수 있다.

따라서 계산의 중복을 피하기 위해 먼저 계산된 s<sub>n</sub> 값을 따로 저장하면, 다음과 같이 계산 회수를 줄일 수 있고,

* n = 2: 2 &rarr; 1 까지만 전개된다.<br>
전개된 수열의 마지막 항은 **그 항부터 시작하는 수열의 첫 번째 항**으로 간주되어, 먼저 계산된 s<sub>1</sub> 값으로 대체된다. 즉 s<sub>2</sub> = 1 + s<sub>1</sub> = 2 이다.
* n = 3: 3 &rarr; 10 &rarr; 5 &rarr; 16 &rarr; 8 &rarr; 4 &rarr; 2 까지만 전개된다. s<sub>3</sub> = 6 + s<sub>2</sub> = 8 이다.
* n = 4: 4 &rarr; 2 까지만 전개된다. s<sub>4</sub> = 1 + s<sub>2</sub> = 3 이다.
* n = 5: 5 &rarr; 16 &rarr; 8 &rarr; 4 까지만 전개된다. s<sub>5</sub> = 3 + s<sub>4</sub> = 6 이다.
* n = 6: 6 &rarr; 3 까지만 전개된다. s<sub>6</sub> = 1 + s<sub>3</sub> = 9 이다.

이것을 바탕으로 s<sub>1</sub>부터 s<sub>999999</sub>까지 효율적으로 구할 수 있다.
