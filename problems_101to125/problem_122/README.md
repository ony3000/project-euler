## 122. Efficient exponentiation

The most naive way of computing <var>n</var><sup>15</sup> requires fourteen multiplications:

> <var>n</var> &times; <var>n</var> &times; ... &times; <var>n</var> = <var>n</var><sup>15</sup>

But using a "binary" method you can compute it in six multiplications:

> <var>n</var> &times; <var>n</var> = <var>n</var><sup>2</sup><br>
> <var>n</var><sup>2</sup> &times; <var>n</var><sup>2</sup> = <var>n</var><sup>4</sup><br>
> <var>n</var><sup>4</sup> &times; <var>n</var><sup>4</sup> = <var>n</var><sup>8</sup><br>
> <var>n</var><sup>8</sup> &times; <var>n</var><sup>4</sup> = <var>n</var><sup>12</sup><br>
> <var>n</var><sup>12</sup> &times; <var>n</var><sup>2</sup> = <var>n</var><sup>14</sup><br>
> <var>n</var><sup>14</sup> &times; <var>n</var> = <var>n</var><sup>15</sup>

However it is yet possible to compute it in only five multiplications:

> <var>n</var> &times; <var>n</var> = <var>n</var><sup>2</sup><br>
> <var>n</var><sup>2</sup> &times; <var>n</var> = <var>n</var><sup>3</sup><br>
> <var>n</var><sup>3</sup> &times; <var>n</var><sup>3</sup> = <var>n</var><sup>6</sup><br>
> <var>n</var><sup>6</sup> &times; <var>n</var><sup>6</sup> = <var>n</var><sup>12</sup><br>
> <var>n</var><sup>12</sup> &times; <var>n</var><sup>3</sup> = <var>n</var><sup>15</sup>

We shall define m(<var>k</var>) to be the minimum number of multiplications to compute <var>n</var><sup><var>k</var></sup>; for example m(15) = 5.

For 1 &le; <var>k</var> &le; 200, find &sum; m(<var>k</var>).
