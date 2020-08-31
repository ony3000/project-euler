## 52. Permuted multiples

양의 정수 x를 n자리 수라고 가정하면, x는 10<sup>n-1</sup> &le; x &lt; 10<sup>n</sup> 범위에서 정의할 수 있다.

우리가 구하고자 하는 x는, 2x, 3x, 4x, 5x, 6x가 각각 x와 동일한 숫자들로 이루어져 있어야 한다. 즉, x가 n자리 수라면 2x, 3x, &ctdot;, 6x도 모두 n자리 수여야 하므로, x는 다음 범위들도 모두 만족해야 한다.

<p align="center">
  10<sup>n-1</sup> &le; 2x &lt; 10<sup>n</sup><br>
  10<sup>n-1</sup> &le; 3x &lt; 10<sup>n</sup><br>
  10<sup>n-1</sup> &le; 4x &lt; 10<sup>n</sup><br>
  10<sup>n-1</sup> &le; 5x &lt; 10<sup>n</sup><br>
  10<sup>n-1</sup> &le; 6x &lt; 10<sup>n</sup>
</p>

위 범위들의 교집합을 구하면 10<sup>n-1</sup> &le; x &lt; <sup>10<sup>n</sup></sup>/<sub>6</sub> 가 되고, 이제 이 범위에 대해서 한 자리 수 부터 시작하여 자리 수를 늘려가면서, 각 자리 수에서 정의할 수 있는 x에 대해 2x, 3x, &ctdot;, 6x가 각각 x와 동일한 숫자들로 이루어져 있는지 확인하면 된다.
