## 148. Exploring Pascal's triangle

We can easily verify that none of the entries in the first seven rows of Pascal's triangle are divisible by 7:

$$
1 \newline
1 \hspace{5.5 mm} 1 \newline
1 \hspace{5.5 mm} 2 \hspace{5.5 mm} 1 \newline
1 \hspace{5.5 mm} 3 \hspace{5.5 mm} 3 \hspace{5.5 mm} 1 \newline
1 \hspace{5 mm} 4 \hspace{5.5 mm} 6 \hspace{5.5 mm} 4 \hspace{5 mm} 1 \newline
1 \hspace{4 mm} 5 \hspace{4.5 mm} 10 \hspace{4 mm} 10 \hspace{4.5 mm} 5 \hspace{4 mm} 1 \newline
1 \hspace{4 mm} 6 \hspace{4 mm} 15 \hspace{4 mm} 20 \hspace{4 mm} 15 \hspace{4 mm} 6 \hspace{4 mm} 1 \newline
$$

However, if we check the first one hundred rows, we will find that only 2361 of the 5050 entries are _not_ divisible by 7.

Find the number of entries which are _not_ divisible by 7 in the first one billion ($10^9$) rows of Pascal's triangle.
