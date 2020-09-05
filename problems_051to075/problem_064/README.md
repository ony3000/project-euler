## 64. Odd period square roots

All square roots are periodic when written as continued fractions and can be written in the form:

![\sqrt{N} = a_{0} + \frac{1}{a_{1} + \frac{1}{a_{2} + \frac{1}{a_{3} + ...}}}](https://latex.codecogs.com/svg.latex?%5Csqrt%7BN%7D%20%3D%20a_%7B0%7D%20&plus;%20%5Cfrac%7B1%7D%7Ba_%7B1%7D%20&plus;%20%5Cfrac%7B1%7D%7Ba_%7B2%7D%20&plus;%20%5Cfrac%7B1%7D%7Ba_%7B3%7D%20&plus;%20...%7D%7D%7D)

For example, let us consider ![\sqrt{23}](https://latex.codecogs.com/svg.latex?%5Csqrt%7B23%7D):

![\sqrt{23} = 4 + \sqrt{23} - 4 = 4 + \frac{1}{\frac{1}{\sqrt{23} - 4}} = 4 + \frac{1}{1 + \frac{\sqrt{23} - 3}{7}}](https://latex.codecogs.com/svg.latex?%5Csqrt%7B23%7D%20%3D%204%20&plus;%20%5Csqrt%7B23%7D%20-%204%20%3D%204%20&plus;%20%5Cfrac%7B1%7D%7B%5Cfrac%7B1%7D%7B%5Csqrt%7B23%7D%20-%204%7D%7D%20%3D%204%20&plus;%20%5Cfrac%7B1%7D%7B1%20&plus;%20%5Cfrac%7B%5Csqrt%7B23%7D%20-%203%7D%7B7%7D%7D)

If we continue we would get the following expansion:

![\sqrt{23} = 4 + \frac{1}{1 + \frac{1}{3 + \frac{1}{1 + \frac{1}{8 + ...}}}}](https://latex.codecogs.com/svg.latex?%5Csqrt%7B23%7D%20%3D%204%20&plus;%20%5Cfrac%7B1%7D%7B1%20&plus;%20%5Cfrac%7B1%7D%7B3%20&plus;%20%5Cfrac%7B1%7D%7B1%20&plus;%20%5Cfrac%7B1%7D%7B8%20&plus;%20...%7D%7D%7D%7D)

The process can be summarised as follows:

![a_{0} = 4, \frac{1}{\sqrt{23} - 4} = \frac{\sqrt{23} + 4}{7} = 1 + \frac{\sqrt{23} - 3}{7}](https://latex.codecogs.com/svg.latex?a_%7B0%7D%20%3D%204%2C%20%5Cfrac%7B1%7D%7B%5Csqrt%7B23%7D%20-%204%7D%20%3D%20%5Cfrac%7B%5Csqrt%7B23%7D%20&plus;%204%7D%7B7%7D%20%3D%201%20&plus;%20%5Cfrac%7B%5Csqrt%7B23%7D%20-%203%7D%7B7%7D)<br>
![a_{1} = 1, \frac{7}{\sqrt{23} - 3} = \frac{7(\sqrt{23} + 3)}{14} = 3 + \frac{\sqrt{23} - 3}{2}](https://latex.codecogs.com/svg.latex?a_%7B1%7D%20%3D%201%2C%20%5Cfrac%7B7%7D%7B%5Csqrt%7B23%7D%20-%203%7D%20%3D%20%5Cfrac%7B7%28%5Csqrt%7B23%7D%20&plus;%203%29%7D%7B14%7D%20%3D%203%20&plus;%20%5Cfrac%7B%5Csqrt%7B23%7D%20-%203%7D%7B2%7D)<br>
![a_{2} = 3, \frac{2}{\sqrt{23} - 3} = \frac{2(\sqrt{23} + 3)}{14} = 1 + \frac{\sqrt{23} - 4}{7}](https://latex.codecogs.com/svg.latex?a_%7B2%7D%20%3D%203%2C%20%5Cfrac%7B2%7D%7B%5Csqrt%7B23%7D%20-%203%7D%20%3D%20%5Cfrac%7B2%28%5Csqrt%7B23%7D%20&plus;%203%29%7D%7B14%7D%20%3D%201%20&plus;%20%5Cfrac%7B%5Csqrt%7B23%7D%20-%204%7D%7B7%7D)<br>
![a_{3} = 1, \frac{7}{\sqrt{23} - 4} = \frac{7(\sqrt{23} + 4)}{7} = 8 + \sqrt{23} - 4](https://latex.codecogs.com/svg.latex?a_%7B3%7D%20%3D%201%2C%20%5Cfrac%7B7%7D%7B%5Csqrt%7B23%7D%20-%204%7D%20%3D%20%5Cfrac%7B7%28%5Csqrt%7B23%7D%20&plus;%204%29%7D%7B7%7D%20%3D%208%20&plus;%20%5Csqrt%7B23%7D%20-%204)<br>
![a_{4} = 8, \frac{1}{\sqrt{23} - 4} = \frac{\sqrt{23} + 4}{7} = 1 + \frac{\sqrt{23} - 3}{7}](https://latex.codecogs.com/svg.latex?a_%7B4%7D%20%3D%208%2C%20%5Cfrac%7B1%7D%7B%5Csqrt%7B23%7D%20-%204%7D%20%3D%20%5Cfrac%7B%5Csqrt%7B23%7D%20&plus;%204%7D%7B7%7D%20%3D%201%20&plus;%20%5Cfrac%7B%5Csqrt%7B23%7D%20-%203%7D%7B7%7D)<br>
![a_{5} = 1, \frac{7}{\sqrt{23} - 3} = \frac{7(\sqrt{23} + 3)}{14} = 3 + \frac{\sqrt{23} - 3}{2}](https://latex.codecogs.com/svg.latex?a_%7B5%7D%20%3D%201%2C%20%5Cfrac%7B7%7D%7B%5Csqrt%7B23%7D%20-%203%7D%20%3D%20%5Cfrac%7B7%28%5Csqrt%7B23%7D%20&plus;%203%29%7D%7B14%7D%20%3D%203%20&plus;%20%5Cfrac%7B%5Csqrt%7B23%7D%20-%203%7D%7B2%7D)<br>
![a_{6} = 3, \frac{2}{\sqrt{23} - 3} = \frac{2(\sqrt{23} + 3)}{14} = 1 + \frac{\sqrt{23} - 4}{7}](https://latex.codecogs.com/svg.latex?a_%7B6%7D%20%3D%203%2C%20%5Cfrac%7B2%7D%7B%5Csqrt%7B23%7D%20-%203%7D%20%3D%20%5Cfrac%7B2%28%5Csqrt%7B23%7D%20&plus;%203%29%7D%7B14%7D%20%3D%201%20&plus;%20%5Cfrac%7B%5Csqrt%7B23%7D%20-%204%7D%7B7%7D)<br>
![a_{7} = 1, \frac{7}{\sqrt{23} - 4} = \frac{7(\sqrt{23} + 4)}{7} = 8 + \sqrt{23} - 4](https://latex.codecogs.com/svg.latex?a_%7B7%7D%20%3D%201%2C%20%5Cfrac%7B7%7D%7B%5Csqrt%7B23%7D%20-%204%7D%20%3D%20%5Cfrac%7B7%28%5Csqrt%7B23%7D%20&plus;%204%29%7D%7B7%7D%20%3D%208%20&plus;%20%5Csqrt%7B23%7D%20-%204)

It can be seen that the sequence is repeating. For conciseness, we use the notation ![\sqrt{23} = [4; (1, 3, 1, 8)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B23%7D%20%3D%20%5B4%3B%20%281%2C%203%2C%201%2C%208%29%5D), to indicate that the block (1,3,1,8) repeats indefinitely.

The first ten continued fraction representations of (irrational) square roots are:

![\sqrt{2} = [1; (2)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B2%7D%20%3D%20%5B1%3B%20%282%29%5D), period=1<br>
![\sqrt{3} = [1; (1, 2)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B3%7D%20%3D%20%5B1%3B%20%281%2C%202%29%5D), period=2<br>
![\sqrt{5} = [2; (4)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B5%7D%20%3D%20%5B2%3B%20%284%29%5D), period=1<br>
![\sqrt{6} = [2; (2, 4)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B6%7D%20%3D%20%5B2%3B%20%282%2C%204%29%5D), period=2<br>
![\sqrt{7} = [2; (1, 1, 1, 4)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B7%7D%20%3D%20%5B2%3B%20%281%2C%201%2C%201%2C%204%29%5D), period=4<br>
![\sqrt{8} = [2; (1, 4)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B8%7D%20%3D%20%5B2%3B%20%281%2C%204%29%5D), period=2<br>
![\sqrt{10} = [3; (6)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B10%7D%20%3D%20%5B3%3B%20%286%29%5D), period=1<br>
![\sqrt{11} = [3; (3, 6)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B11%7D%20%3D%20%5B3%3B%20%283%2C%206%29%5D), period=2<br>
![\sqrt{12} = [3; (2, 6)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B12%7D%20%3D%20%5B3%3B%20%282%2C%206%29%5D), period=2<br>
![\sqrt{13} = [3; (1, 1, 1, 1, 6)]](https://latex.codecogs.com/svg.latex?%5Csqrt%7B13%7D%20%3D%20%5B3%3B%20%281%2C%201%2C%201%2C%201%2C%206%29%5D), period=5

Exactly four continued fractions, for ![N \leq 13](https://latex.codecogs.com/svg.latex?N%20%5Cleq%2013), have an odd period.

How many continued fractions for ![N \leq 10000](https://latex.codecogs.com/svg.latex?N%20%5Cleq%2010000) have an odd period?
