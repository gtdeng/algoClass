/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

let factorial = (num) => {
  if (num === 2) {
    return 2;
  }
  return num * factorial(num-1);
};
