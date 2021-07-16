## 82. Path sum: three ways

참고: 이 문제는 [81번 문제](/problems_076to100/problem_081)의 더 어려운 버전이다.

다음 5 &times; 5 행렬에서, 왼쪽 열의 아무 셀을 출발점으로 하고, 위, 아래, 또는 오른쪽으로만 이동해서, 오른쪽 열의 아무 셀을 도착점으로 하는 경로들 중, 합이 최소가 되는 경로는 다음과 같이 붉게 표시되어있고, 이 경로 위의 수를 합하면 994이다.

<p align="center">
  <img
    src="./matrix.png"
    alt="131 673 <strong>234</strong> <strong>103</strong> <strong>18</strong><br>
<strong>201</strong> <strong>96</strong> <strong>342</strong> 965 150<br>
630 803 746 422 111<br>
537 699 497 121 956<br>
805 732 524 37 331"
  >
</p>

80 &times; 80 행렬이 들어있는 텍스트 파일 [matrix.txt](./matrix.txt)를 사용하여, 왼쪽 열의 아무 셀을 출발점으로 하고, 위, 아래, 또는 오른쪽으로만 이동해서, 오른쪽 열의 아무 셀을 도착점으로 하는 경로들 중, 합이 최소가 되는 경로에 놓인 수들의 합을 구하여라.
