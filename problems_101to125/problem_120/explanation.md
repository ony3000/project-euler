## 120. Square remainders

<var>a</var>가 주어졌을 때, <var>n</var>에 따라 변화하는 <var>r</var>의 값을 <var>r</var>(<var>n</var>)이라 하자.

처음 몇 개의 <var>a</var>에 대하여 <var>r</var>(<var>n</var>)을 조사해본 결과, 값이 주기적으로 반복되는 것을 확인할 수 있었고, <var>r</var>(<var>n</var>)의 값에 따라 주기가 각각 다르긴 했지만, 적어도 <var>r</var>(<var>n</var>) = <var>r</var>(<var>n</var>+2<var>a</var>) 임을 추측할 수 있었다.

<p>
  <details>
    <summary>
      <var>r</var>(<var>n</var>) = <var>r</var>(<var>n</var>+2<var>a</var>) 의 증명
    </summary>
    <p>
      <var>r</var>(<var>n</var>)은
      (<var>a</var>-1)<sup><var>n</var></sup>+(<var>a</var>+1)<sup><var>n</var></sup>을
      <var>a</var><sup>2</sup>으로 나눈 나머지이고,
      <var>r</var>(<var>n</var>+2<var>a</var>)는
      (<var>a</var>-1)<sup><var>n</var>+2<var>a</var></sup>+(<var>a</var>+1)<sup><var>n</var>+2<var>a</var></sup>
      = (<var>a</var>-1)<sup><var>n</var></sup>(<var>a</var>-1)<sup>2<var>a</var></sup>+(<var>a</var>+1)<sup><var>n</var></sup>(<var>a</var>+1)<sup>2<var>a</var></sup>을
      <var>a</var><sup>2</sup>으로 나눈 나머지이므로,
      두 값이 같음을 보이기 위해서는
      (<var>a</var>-1)<sup>2<var>a</var></sup> &equiv; 1 (mod <var>a</var><sup>2</sup>)과
      (<var>a</var>+1)<sup>2<var>a</var></sup> &equiv; 1 (mod <var>a</var><sup>2</sup>)을 각각 증명해야 한다.
    </p>
    <ul>
      <li>
        <details>
          <summary>
            (<var>a</var>-1)<sup>2<var>a</var></sup> &equiv; 1 (mod <var>a</var><sup>2</sup>) 의 증명
          </summary>
          <p>
            처음 몇 개의 거듭제곱에 대하여 (<var>a</var>-1)<sup><var>k</var></sup>을 계산해보면<br>
            (<var>a</var>-1)<sup>2</sup> = <var>a</var><sup>2</sup> - 2<var>a</var> + 1 &equiv; - 2<var>a</var> + 1 (mod <var>a</var><sup>2</sup>)<br>
            (<var>a</var>-1)<sup>3</sup> = (<var>a</var>-1)<sup>2</sup>(<var>a</var>-1) &equiv; (- 2<var>a</var> + 1)(<var>a</var>-1) = - 2<var>a</var><sup>2</sup> + 3<var>a</var> - 1 &equiv; 3<var>a</var> - 1 (mod <var>a</var><sup>2</sup>)<br>
            (<var>a</var>-1)<sup>4</sup> = (<var>a</var>-1)<sup>3</sup>(<var>a</var>-1) &equiv; (3<var>a</var> - 1)(<var>a</var>-1) = 3<var>a</var><sup>2</sup> - 4<var>a</var> + 1 &equiv; - 4<var>a</var> + 1 (mod <var>a</var><sup>2</sup>)<br>
            이므로,<br>
            (<var>a</var>-1)<sup><var>k</var></sup> &equiv; (-1)<sup><var>k</var>+1</sup> <var>k</var><var>a</var> + (-1)<sup><var>k</var></sup> (mod <var>a</var><sup>2</sup>) 이라 할 수 있다.<br>
            따라서, (<var>a</var>-1)<sup><var>a</var></sup> &equiv; (-1)<sup><var>a</var>+1</sup> <var>a</var><sup>2</sup> + (-1)<sup><var>a</var></sup> &equiv; (-1)<sup><var>a</var></sup> (mod <var>a</var><sup>2</sup>) 이고,
            (<var>a</var>-1)<sup>2<var>a</var></sup> = ((<var>a</var>-1)<sup><var>a</var></sup>)<sup>2</sup> &equiv; ((-1)<sup><var>a</var></sup>)<sup>2</sup> = ((-1)<sup>2</sup>)<sup><var>a</var></sup> = 1<sup><var>a</var></sup> = 1 (mod <var>a</var><sup>2</sup>) 이다.
          </p>
        </details>
      </li>
      <li>
        <details>
          <summary>
            (<var>a</var>+1)<sup>2<var>a</var></sup> &equiv; 1 (mod <var>a</var><sup>2</sup>) 의 증명
          </summary>
          <p>
            처음 몇 개의 거듭제곱에 대하여 (<var>a</var>+1)<sup><var>k</var></sup>을 계산해보면<br>
            (<var>a</var>+1)<sup>2</sup> = <var>a</var><sup>2</sup> + 2<var>a</var> + 1 &equiv; 2<var>a</var> + 1 (mod <var>a</var><sup>2</sup>)<br>
            (<var>a</var>+1)<sup>3</sup> = (<var>a</var>+1)<sup>2</sup>(<var>a</var>+1) &equiv; (2<var>a</var> + 1)(<var>a</var>+1) = 2<var>a</var><sup>2</sup> + 3<var>a</var> + 1 &equiv; 3<var>a</var> + 1 (mod <var>a</var><sup>2</sup>)<br>
            (<var>a</var>+1)<sup>4</sup> = (<var>a</var>+1)<sup>3</sup>(<var>a</var>+1) &equiv; (3<var>a</var> + 1)(<var>a</var>+1) = 3<var>a</var><sup>2</sup> + 4<var>a</var> + 1 &equiv; 4<var>a</var> + 1 (mod <var>a</var><sup>2</sup>)<br>
            이므로,<br>
            (<var>a</var>+1)<sup><var>k</var></sup> &equiv; <var>k</var><var>a</var> + 1 (mod <var>a</var><sup>2</sup>) 이라 할 수 있다.<br>
            따라서, (<var>a</var>+1)<sup><var>a</var></sup> &equiv; <var>a</var><sup>2</sup> + 1 &equiv; 1 (mod <var>a</var><sup>2</sup>) 이고,
            (<var>a</var>+1)<sup>2<var>a</var></sup> = ((<var>a</var>+1)<sup><var>a</var></sup>)<sup>2</sup> &equiv; 1<sup>2</sup> = 1 (mod <var>a</var><sup>2</sup>) 이다.
          </p>
        </details>
      </li>
    </ul>
    <hr>
  </details>
</p>

위 증명에 의해, <var>a</var>가 주어졌을 때 1 &le; <var>n</var> &le; 2<var>a</var> 범위에서만 <var>r</var>(<var>n</var>)을 계산해도, 그 <var>r</var>(<var>n</var>)들 중에 <var>r</var><sub>max</sub>가 반드시 존재함이 보장된다.
