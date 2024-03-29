## 89. Roman numerals

로마 숫자로 작성된 수가 유효한 것으로 간주되려면 따라야 하는 기본 규칙이 있다. 어떤 수는 두 가지 이상의 방법으로 표현할 수 있지만, "가장 좋은" 표현 방법은 항상 있다.

예를 들어, 16을 로마 숫자로 작성하는 방법은 적어도 여섯 가지 있는 것으로 보인다.

```
IIIIIIIIIIIIIIII
VIIIIIIIIIII
VVIIIIII
XIIIIII
VVVI
XVI
```

하지만, 규칙에 따르면 `XIIIIII`와 `XVI`만이 유효하고, 마지막 예가 가장 적은 개수의 숫자를 사용하므로 가장 효율적인 것으로 간주된다.

텍스트 파일 [roman.txt](./roman.txt)에는, 유효하지만 가장 효율적인 표현은 아닐 수도 있는, 로마 숫자 표현 1000개가 들어있다. 이 문제에 대한 명확한 규칙은 [About... Roman Numerals](https://projecteuler.net/about=roman_numerals)를 참조하라.

각 로마 숫자 표현을 가장 효율적인 형태로 썼을 때, 절약되는 글자 수의 합을 구하여라.

참고: 파일에 들어있는 모든 로마 숫자 표현은, 동일한 단위가 연속될 경우, 네 개 이하로 포함되었다고 가정할 수 있다.
