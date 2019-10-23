## 14. Longest Collatz sequence

**첫 번째 항을 n으로 시작했을 때, 만들어지는 수열의 길이**를 ![\large s_{n}](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7Bn%7D)이라 하자.

처음 몇 개의 ![\large s_{n}](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7Bn%7D)을 구해보면 다음과 같다.

* n = 1: 첫 번째 항이 1이므로 다른 항을 계산할 필요가 없다. ![\large s_{1} = 1](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7B1%7D%20%3D%201) 이다.
* n = 2: 2 &rarr; 1 로 전개된다. ![\large s_{2} = 2](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7B2%7D%20%3D%202) 이다.
* n = 3: 3 &rarr; 10 &rarr; 5 &rarr; 16 &rarr; 8 &rarr; 4 &rarr; 2 &rarr; 1 로 전개된다. ![\large s_{3} = 8](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7B3%7D%20%3D%208) 이다.
* n = 4: 4 &rarr; 2 &rarr; 1 로 전개된다. ![\large s_{4} = 3](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7B4%7D%20%3D%203) 이다.
* n = 5: 5 &rarr; 16 &rarr; 8 &rarr; 4 &rarr; 2 &rarr; 1 로 전개된다. ![\large s_{5} = 6](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7B5%7D%20%3D%206) 이다.
* n = 6: 6 &rarr; 3 &rarr; 10 &rarr; 5 &rarr; 16 &rarr; 8 &rarr; 4 &rarr; 2 &rarr; 1 로 전개된다. ![\large s_{6} = 9](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7B6%7D%20%3D%209) 이다.

여기서 우리는 같은 값을 가지는 항이 여러 번 계산되고 있음을 알 수 있다.

따라서 계산의 중복을 피하기 위해 먼저 계산된 ![\large s_{n}](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7Bn%7D) 값을 따로 저장하면, 다음과 같이 계산 회수를 줄일 수 있고,

* n = 2: 2 &rarr; 1 까지만(?) 전개된다.<br>
전개된 수열의 마지막 항은 **그 항부터 시작하는 수열의 첫 번째 항**으로 간주되어, 먼저 계산된 ![\large s_{1}](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7B1%7D) 값으로 대체된다. 즉 ![\large s_{2} = 1 + s_{1} = 2](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7B2%7D%20%3D%201%20&plus;%20s_%7B1%7D%20%3D%202) 이다.
* n = 3: 3 &rarr; ... &rarr; 4 &rarr; 2 까지만 전개된다. ![\large s_{3} = 6 + s_{2} = 8](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7B3%7D%20%3D%206%20&plus;%20s_%7B2%7D%20%3D%208) 이다.
* n = 4: 4 &rarr; 2 까지만 전개된다. ![\large s_{4} = 1 + s_{2} = 3](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7B4%7D%20%3D%201%20&plus;%20s_%7B2%7D%20%3D%203) 이다.
* n = 5: 5 &rarr; 16 &rarr; 8 &rarr; 4 까지만 전개된다. ![\large s_{5} = 3 + s_{4} = 6](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7B5%7D%20%3D%203%20&plus;%20s_%7B4%7D%20%3D%206) 이다.
* n = 6: 6 &rarr; 3 까지만 전개된다. ![\large s_{6} = 1 + s_{3} = 9](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7B6%7D%20%3D%201%20&plus;%20s_%7B3%7D%20%3D%209) 이다.

이것을 바탕으로 ![\large s_{1}](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7B1%7D)부터 ![\large s_{999999}](https://latex.codecogs.com/png.latex?%5Clarge%20s_%7B999999%7D)까지 효율적으로 구할 수 있다.
