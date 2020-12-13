## 27. Quadratic primes

### Translation
* [한국어](./translation-ko.md)

Euler discovered the remarkable quadratic formula:

<p align="center">
  <img
    src="https://latex.codecogs.com/svg.latex?n%5E%7B2%7D%20&plus;%20n%20&plus;%2041"
    alt="n^{2} + n + 41"
  >
</p>

It turns out that the formula will produce 40 primes for the consecutive integer values ![0 \leq n \leq 39](https://latex.codecogs.com/svg.latex?0%20%5Cleq%20n%20%5Cleq%2039). However, when ![n = 40, 40^{2} + 40 + 41 = 40(40 + 1) + 41](https://latex.codecogs.com/svg.latex?n%20%3D%2040%2C%2040%5E%7B2%7D%20&plus;%2040%20&plus;%2041%20%3D%2040%2840%20&plus;%201%29%20&plus;%2041) is divisible by 41, and certainly when ![n = 41, 41^{2} + 41 + 41](https://latex.codecogs.com/svg.latex?n%20%3D%2041%2C%2041%5E%7B2%7D%20&plus;%2041%20&plus;%2041) is clearly divisible by 41.

The incredible formula ![n^{2} - 79n + 1601](https://latex.codecogs.com/svg.latex?n%5E%7B2%7D%20-%2079n%20&plus;%201601) was discovered, which produces 80 primes for the consecutive values ![0 \leq n \leq 79](https://latex.codecogs.com/svg.latex?0%20%5Cleq%20n%20%5Cleq%2079). The product of the coefficients, &minus;79 and 1601, is &minus;126479.

Considering quadratics of the form:

> ![n^{2} + an + b](https://latex.codecogs.com/svg.latex?n%5E%7B2%7D%20&plus;%20an%20&plus;%20b), where ![\left | a \right | < 1000](https://latex.codecogs.com/svg.latex?%5Cleft%20%7C%20a%20%5Cright%20%7C%20%3C%201000) and ![\left | b \right | \leq 1000](https://latex.codecogs.com/svg.latex?%5Cleft%20%7C%20b%20%5Cright%20%7C%20%5Cleq%201000)<br>
> <br>
> where ![\left | n \right |](https://latex.codecogs.com/svg.latex?%5Cleft%20%7C%20n%20%5Cright%20%7C) is the modulus/absolute value of ![n](https://latex.codecogs.com/svg.latex?n)<br>
> e.g. ![\left | 11 \right | = 11](https://latex.codecogs.com/svg.latex?%5Cleft%20%7C%2011%20%5Cright%20%7C%20%3D%2011) and ![\left | -4 \right | = 4](https://latex.codecogs.com/svg.latex?%5Cleft%20%7C%20-4%20%5Cright%20%7C%20%3D%204)

Find the product of the coefficients, ![a](https://latex.codecogs.com/svg.latex?a) and ![b](https://latex.codecogs.com/svg.latex?b), for the quadratic expression that produces the maximum number of primes for consecutive values of ![n](https://latex.codecogs.com/svg.latex?n), starting with ![n = 0](https://latex.codecogs.com/svg.latex?n%20%3D%200).
