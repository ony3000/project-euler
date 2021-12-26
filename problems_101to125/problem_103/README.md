## 103. Special subset sums: optimum

Let S(A) represent the sum of elements in set A of size <var>n</var>. We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:

1. S(B) &ne; S(C); that is, sums of subsets cannot be equal.
2. If B contains more elements than C then S(B) > S(C).

If S(A) is minimised for a given <var>n</var>, we shall call it an optimum special sum set. The first five optimum special sum sets are given below.

> <var>n</var> = 1: {1}<br>
> <var>n</var> = 2: {1, 2}<br>
> <var>n</var> = 3: {2, 3, 4}<br>
> <var>n</var> = 4: {3, 5, 6, 7}<br>
> <var>n</var> = 5: {6, 9, 11, 12, 13}

It _seems_ that for a given optimum set, A = {<var>a</var><sub>1</sub>, <var>a</var><sub>2</sub>, ... , <var>a</var><sub>n</sub>}, the next optimum set is of the form B = {<var>b</var>, <var>a</var><sub>1</sub>+<var>b</var>, <var>a</var><sub>2</sub>+<var>b</var>, ... , <var>a</var><sub>n</sub>+<var>b</var>}, where <var>b</var> is the "middle" element on the previous row.

By applying this "rule" we would expect the optimum set for <var>n</var> = 6 to be A = {11, 17, 20, 22, 23, 24}, with S(A) = 117. However, this is not the optimum set, as we have merely applied an algorithm to provide a near optimum set. The optimum set for <var>n</var> = 6 is A = {11, 18, 19, 20, 22, 25}, with S(A) = 115 and corresponding set string: 111819202225.

Given that A is an optimum special sum set for <var>n</var> = 7, find its set string.

NOTE: This problem is related to [Problem 105](/problems_101to125/problem_105) and [Problem 106](/problems_101to125/problem_106).
