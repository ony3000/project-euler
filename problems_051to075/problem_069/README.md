## 69. Totient maximum

Euler's Totient function, &phi;(<var>n</var>) [sometimes called the phi function], is used to determine the number of numbers less than <var>n</var> which are relatively prime to <var>n</var>. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, &phi;(9)=6.

<var>n</var> | Relatively Prime | &phi;(<var>n</var>) | <var>n</var>/&phi;(<var>n</var>)
:---: | :---: | :---: | :---:
2 | 1 | 1 | 2
3 | 1,2 | 2 | 1.5
4 | 1,3 | 2 | 2
5 | 1,2,3,4 | 4 | 1.25
6 | 1,5 | 2 | 3
7 | 1,2,3,4,5,6 | 6 | 1.1666...
8 | 1,3,5,7 | 4 | 2
9 | 1,2,4,5,7,8 | 6 | 1.5
10 | 1,3,7,9 | 4 | 2.5

It can be seen that <var>n</var>=6 produces a maximum <var>n</var>/&phi;(<var>n</var>) for <var>n</var> &le; 10.

Find the value of <var>n</var> &le; 1,000,000 for which <var>n</var>/&phi;(<var>n</var>) is a maximum.
