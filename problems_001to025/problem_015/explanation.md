## 15. Lattice paths

아래로 이동하는 움직임을 **D**라 하고, 오른쪽으로 이동하는 움직임을 **R**이라 하면,<br>
문제의 답은 **20개의 D와 20개의 R을 순서에 상관있게 나열하는 방법의 수**와 같다.

총 40개의 움직임(D와 R)을 순서에 상관있게 나열하는 방법의 수는 40!이다.

이 중 20개의 D만 놓고 보면, 임의의 D를 두 개 선택해서 바꾸더라도 전체 경로는 변하지 않는다.<br>
즉, 20개의 D를 순서에 상관있게 나열하는 방법의 수(=20!)만큼 중복되는 경로가 생긴다.

R에 대해서도 같은 이유로 20!개의 중복되는 경로가 생기므로,<br>
전체 경로의 개수에서 중복되는 경로의 개수를 나눠주면 문제의 답을 얻을 수 있다.
