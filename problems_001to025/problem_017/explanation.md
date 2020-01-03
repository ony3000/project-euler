## 17. Number letter counts

1부터 1000 중에 1000은 유일한 네 자리 수이므로 마지막에 따로 처리하기로 하고,<br>
1부터 999까지 살펴보면 다음 세 가지 형태로 분류된다.

* X hundred: 100의 배수
* X hundred and Y: 100의 배수가 아닌 세 자리 수
* Y: 100의 배수가 아닌 두 자리 수(=100보다 작은 수)

따라서 우선 백의 자리를 보고, 0이 아니면 **X hundred**의 글자 수를 더한다.<br>
여기서 X의 값은 백의 자리 숫자를 그대로 사용하면 된다. 다음과 같이 풀어 쓸 수 있다.

<p align="center">
  300 = 3 &times; 100 = three hundred
</p>

그 후 백의 자리 미만, 즉 Y의 값을 보고, 00이 아니면 다음과 같은 방법으로 글자 수를 더한다.

* 백의 자리가 0이 아니면 **and**의 글자 수를 더한다.
* Y의 값이 20 미만이면 고유 표기법이 존재하므로, 해당 표기법 상의 글자 수를 더한다.
* Y의 값이 20 이상이면 십의 자리와 일의 자리를 a &times; 10 + b 형태로 분리하여 글자 수를 더한다.<br>
이 때 b = 0 인 경우, b에 대한 표기법으로 **zero** 대신 빈 문자열을 사용한다.

<p align="center">
  15 = 15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= fifteen&nbsp;&nbsp;&nbsp;&nbsp;<br>
  30 = 30 + 0 = thirty&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
  45 = 40 + 5 = forty five
</p>
