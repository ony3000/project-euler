## 70. Totient permutation

오일러 파이 함수(피<a id="footnote-ref-1" href="#footnote-1">[1]</a> 함수라고 부르기도 함) &phi;(<var>n</var>)은, 양의 정수 <var>n</var>에 대하여, <var>n</var>과 서로소인 1부터 <var>n</var>까지의 정수의 개수를 나타낸다. 예를 들어, 1, 2, 4, 5, 7, 8은 모두 9보다 작고 9와 서로소이므로, &phi;(9)=6 이다.<br>
1은 모든 양의 정수와 서로소이다. &phi;(1)=1 이다.

흥미로운 것은, &phi;(87109)=79180 인데, 87109는 79180의 순열이다.

1 < <var>n</var> < 10<sup>7</sup>에 대해서, &phi;(<var>n</var>)이 <var>n</var>의 순열이면서 <var>n</var>/&phi;(<var>n</var>)의 값을 최소로 만드는 <var>n</var>을 구하여라.

---

<a id="footnote-1" href="#footnote-ref-1">**[1]**</a> &phi;의 영어 발음기호(/fa&#x26A;/)를 따르면 파이라고 표기하는 것이 맞겠으나, 흔히 파이라고 하면 &pi;(/pa&#x26A;/)를 떠올리기 때문에, 둘을 구분하기 위해 &phi;는 그리스어 발음(/fi/)을 사용한다.