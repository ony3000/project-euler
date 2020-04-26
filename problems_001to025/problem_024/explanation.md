## 24. Lexicographic permutations

주어진 사전식 순열을 분석해보면, 각 순열이 만들어지는 규칙을 확인할 수 있다.

순서 | Index | 순열 | 규칙
--- | --- | --- | ---
1 | 0 | 012 | {0,1,2} 중 **0**(=index를 2!로 나눈 몫)번째 원소 0을 선택<br>{1,2} 중 **0**(=(index를 2!로 나눈 나머지)를 1!로 나눈 몫)번째 원소 1을 선택<br>{2} 중 **0**번째 원소 2를 선택 (&#x203B; 마지막 단계는 하나 남은 원소를 그냥 선택하면 된다.)
2 | 1 | 021 | {0,1,2} 중 **0**(=index를 2!로 나눈 몫)번째 원소 0을 선택<br>{1,2} 중 **1**(=(index를 2!로 나눈 나머지)를 1!로 나눈 몫)번째 원소 2를 선택<br>{1} 중 **0**번째 원소 1을 선택
3 | 2 | 102 | {0,1,2} 중 **1**(=index를 2!로 나눈 몫)번째 원소 1을 선택<br>{0,2} 중 **0**(=(index를 2!로 나눈 나머지)를 1!로 나눈 몫)번째 원소 0을 선택<br>{2} 중 **0**번째 원소 2를 선택
4 | 3 | 120 | {0,1,2} 중 **1**(=index를 2!로 나눈 몫)번째 원소 1을 선택<br>{0,2} 중 **1**(=(index를 2!로 나눈 나머지)를 1!로 나눈 몫)번째 원소 2를 선택<br>{0} 중 **0**번째 원소 0을 선택
5 | 4 | 201 | {0,1,2} 중 **2**(=index를 2!로 나눈 몫)번째 원소 2를 선택<br>{0,1} 중 **0**(=(index를 2!로 나눈 나머지)를 1!로 나눈 몫)번째 원소 0을 선택<br>{1} 중 **0**번째 원소 1을 선택
6 | 5 | 210 | {0,1,2} 중 **2**(=index를 2!로 나눈 몫)번째 원소 2를 선택<br>{0,1} 중 **1**(=(index를 2!로 나눈 나머지)를 1!로 나눈 몫)번째 원소 1을 선택<br>{0} 중 **0**번째 원소 0을 선택

위 규칙을 이용하면, 순열을 구성하는 숫자(또는 알파벳)의 개수가 많아져도 특정 순서의 순열을 구할 수 있다.