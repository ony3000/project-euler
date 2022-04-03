## 124. Ordered radicals

The radical of <var>n</var>, rad(<var>n</var>), is the product of the distinct prime factors of <var>n</var>. For example, 504 = 2<sup>3</sup> &times; 3<sup>2</sup> &times; 7, so rad(504) = 2 &times; 3 &times; 7 = 42.

If we calculate rad(<var>n</var>) for 1 &le; <var>n</var> &le; 10, then sort them on rad(<var>n</var>), and sorting on <var>n</var> if the radical values are equal, we get:

<table align="center">
  <thead>
    <tr>
      <th colspan="2">Unsorted</th>
      <th>&nbsp;</th>
      <th colspan="3">Sorted</th>
    </tr>
    <tr>
      <th><var>n</var></th>
      <th>rad(<var>n</var>)</th>
      <th>&nbsp;</th>
      <th><var>n</var></th>
      <th>rad(<var>n</var>)</th>
      <th><var>k</var></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>&nbsp;</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2</td>
      <td>2</td>
      <td>&nbsp;</td>
      <td>2</td>
      <td>2</td>
      <td>2</td>
    </tr>
    <tr>
      <td>3</td>
      <td>3</td>
      <td>&nbsp;</td>
      <td>4</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>4</td>
      <td>2</td>
      <td>&nbsp;</td>
      <td>8</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <td>5</td>
      <td>5</td>
      <td>&nbsp;</td>
      <td>3</td>
      <td>3</td>
      <td>5</td>
    </tr>
    <tr>
      <td>6</td>
      <td>6</td>
      <td>&nbsp;</td>
      <td>9</td>
      <td>3</td>
      <td>6</td>
    </tr>
    <tr>
      <td>7</td>
      <td>7</td>
      <td>&nbsp;</td>
      <td>5</td>
      <td>5</td>
      <td>7</td>
    </tr>
    <tr>
      <td>8</td>
      <td>2</td>
      <td>&nbsp;</td>
      <td>6</td>
      <td>6</td>
      <td>8</td>
    </tr>
    <tr>
      <td>9</td>
      <td>3</td>
      <td>&nbsp;</td>
      <td>7</td>
      <td>7</td>
      <td>9</td>
    </tr>
    <tr>
      <td>10</td>
      <td>10</td>
      <td>&nbsp;</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
    </tr>
  </tbody>
</table>

Let E(<var>k</var>) be the <var>k</var>th element in the sorted <var>n</var> column; for example, E(4) = 8 and E(6) = 9.

If rad(<var>n</var>) is sorted for 1 &le; <var>n</var> &le; 100000, find E(10000).
