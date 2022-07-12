## 150. Searching a triangular array for a sub-triangle having minimum-sum

In a triangular array of positive and negative integers, we wish to find a sub-triangle such that the sum of the numbers it contains is the smallest possible.

In the example below, it can be easily verified that the marked triangle satisfies this condition having a sum of -42.

<p align="center">
  <img
    src="./p150.gif"
    alt=""
  >
</p>

We wish to make such a triangular array with one thousand rows, so we generate 500500 pseudo-random numbers $s_k$ in the range $\pm 2^{19}$, using a type of random number generator (known as a Linear Congruential Generator) as follows:

> t := 0<br>
> for k = 1 up to k = 500500:<br>
> &nbsp;&nbsp;&nbsp;&nbsp;t := (615949*t + 797807) modulo $2^{20}$<br>
> &nbsp;&nbsp;&nbsp;&nbsp;$s_k$ := t - $2^{19}$

Thus: $s_1 = 273519$, $s_2 = -153582$, $s_3 = 450905$ etc

Our triangular array is then formed using the pseudo-random numbers thus:

$$
s_{1} \newline
s_{2} \hspace{4 mm} s_{3} \newline
s_{4} \hspace{4 mm} s_{5} \hspace{4 mm} s_{6} \newline
s_{7} \hspace{4 mm} s_{8} \hspace{4 mm} s_{9} \hspace{4 mm} s_{10} \newline
...
$$

Sub-triangles can start at any element of the array and extend down as far as we like (taking-in the two elements directly below it from the next row, the three elements directly below from the row after that, and so on).<br>
The "sum of a sub-triangle" is defined as the sum of all the elements it contains.<br>
Find the smallest possible sub-triangle sum.
