## 53. Combinatoric selections

### Translation
* [한국어](./translation-ko.md)

There are exactly ten ways of selecting three from five, 12345:

<p align="center">
  123, 124, 125, 134, 135, 145, 234, 235, 245, and 345
</p>

In combinatorics, we use the notation, ![\binom{5}{3} = 10](https://latex.codecogs.com/svg.latex?%5Cbinom%7B5%7D%7B3%7D%20%3D%2010).

In general, ![\binom{n}{r} = \frac{n!}{r!(n-r)!}](https://latex.codecogs.com/svg.latex?%5Cbinom%7Bn%7D%7Br%7D%20%3D%20%5Cfrac%7Bn%21%7D%7Br%21%28n-r%29%21%7D), where ![r \leq n](https://latex.codecogs.com/svg.latex?r%20%5Cleq%20n), ![n! = n \times (n-1) \times ... \times 3 \times 2 \times 1](https://latex.codecogs.com/svg.latex?n%21%20%3D%20n%20%5Ctimes%20%28n-1%29%20%5Ctimes%20...%20%5Ctimes%203%20%5Ctimes%202%20%5Ctimes%201), and ![0! = 1](https://latex.codecogs.com/svg.latex?0%21%20%3D%201).

It is not until ![n = 23](https://latex.codecogs.com/svg.latex?n%20%3D%2023), that a value exceeds one-million: ![\binom{23}{10} = 1144066](https://latex.codecogs.com/svg.latex?%5Cbinom%7B23%7D%7B10%7D%20%3D%201144066).

How many, not necessarily distinct, values of ![\binom{n}{r}](https://latex.codecogs.com/svg.latex?%5Cbinom%7Bn%7D%7Br%7D) for ![1 \leq n \leq 100](https://latex.codecogs.com/svg.latex?1%20%5Cleq%20n%20%5Cleq%20100), are greater than one-million?
