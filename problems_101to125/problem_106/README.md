## 106. Special subset sums: meta-testing

Let S(A) represent the sum of elements in set A of size <var>n</var>. We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:

1. S(B) &ne; S(C); that is, sums of subsets cannot be equal.
2. If B contains more elements than C then S(B) > S(C).

For this problem we shall assume that a given set contains <var>n</var> strictly increasing elements and it already satisfies the second rule.

Surprisingly, out of the 25 possible subset pairs that can be obtained from a set for which <var>n</var> = 4, only 1 of these pairs need to be tested for equality (first rule). Similarly, when <var>n</var> = 7, only 70 out of the 966 subset pairs need to be tested.

For <var>n</var> = 12, how many of the 261625 subset pairs that can be obtained need to be tested for equality?

NOTE: This problem is related to [Problem 103](/problems_101to125/problem_103) and [Problem 105](/problems_101to125/problem_105).
