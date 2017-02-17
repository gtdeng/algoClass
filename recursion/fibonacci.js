/*

Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.

Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...

What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/

let fibonnaci = (n) => {
  return n < 2 ? n : fibonnaci(n - 1) + fibonnaci(n - 2);
};
//O(2n)

let fibonnaci = (n) => {
  var result = [0, 1];

  if (n < 2) {
    return n;
  } else {
    for (var i = 2; i <= n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
  }
  return result[n];
};
//O(n)
