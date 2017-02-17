/*
Write a function that takes two numbers and returns the greatest common divisor.
*/

//Iterative Solution, NOT recurisive solution
let gcd = (m, n) => {
  //get the square-root of the larger number
  //start decrementing to find the gcd 
  var larger = Math.max(m,n);
  var sqrt = Math.floor(Math.sqrt(larger));
  var output = 1;

  while (larger > 0) {
    if (m % larger === 0 && n % larger === 0) {
      output = larger;
      break;
    }
    larger--;
  }

  return output;
};


//Recursive Solutions:::

// Euclid's algorithm
// The Euclidean algorithm is based on the principle that the greatest common divisor of two numbers does not change if the larger number is replaced by its difference with the smaller number. For example, 21 is the GCD of 252 and 105 (252 = 21 × 12 and 105 = 21 × 5), and the same number 21 is also the GCD of 105 and 147 = 252 − 105. 
function gcd(num1, num2) {
  var min = Math.min(num1, num2);
  var max = Math.max(num1, num2);

  if (max % min === 0) {
    return min;
  }else {
    return gcd(min, max % min);
  }
}



// Dijkstra's algorithm
function gcd(num1, num2) {
  if (num1 === num2) {
    return num1;
  }else if (num1 > num2) {
    return gcd(num1-num2, num2);
  } else {
    return gcd(num1, num2-num1);
  }
}
