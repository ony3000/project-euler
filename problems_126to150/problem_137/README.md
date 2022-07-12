## 137. Fibonacci golden nuggets

Consider the infinite polynomial series $A_F(x) = xF_1 + x^2F_2 + x^3F_3 + ...$, where $F_k$ is the $k$ th term in the Fibonacci sequence: $1, 1, 2, 3, 5, 8, ...$; that is, $F_k = F_{k-1} + F_{k-2}$, $F_1 = 1$ and $F_2 = 1$.

For this problem we shall be interested in values of $x$ for which $A_F(x)$ is a positive integer.

Surprisingly $A_F(\frac{1}{2}) = (\frac{1}{2}) \times 1 + (\frac{1}{2})^2 \times 1 + (\frac{1}{2})^3 \times 2 + (\frac{1}{2})^4 \times 3 + (\frac{1}{2})^5 \times 5 + ... \newline \hspace{26 mm} = \frac{1}{2} + \frac{1}{4} + \frac{2}{8} + \frac{3}{16} + \frac{5}{32} + ... \newline \hspace{26 mm} = 2$

The corresponding values of $x$ for the first five natural numbers are shown below.

$x$ | $A_F(x)$
:-: | :-:
$\sqrt{2} - 1$ | 1
$\frac{1}{2}$ | 2
$\frac{\sqrt{13} - 2}{3}$ | 3
$\frac{\sqrt{89} - 5}{8}$ | 4
$\frac{\sqrt{34} - 3}{5}$ | 5

We shall call $A_F(x)$ a golden nugget if $x$ is rational, because they become increasingly rarer; for example, the 10th golden nugget is 74049690.

Find the 15th golden nugget.
