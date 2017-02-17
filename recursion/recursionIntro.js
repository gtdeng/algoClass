//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
let fx = (n) => {
  while (n >= 0) {
    console.log(n);
    n--;
  }
};


//2. Next, try looping just like above except using recursion
let fx = (n) => {
  if (n >= 0) {
    console.log(n);
    fx(n-1);
  }
};


//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
let exponent = (base, expo) => {
  let ans = base;

  while(expo > 1) {
    ans = ans * base;
    expo--;
  }

  return ans;
};


//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
let exponent = (base, expo) => {
  if(expo === 1) {
    return base;
  } else {
    return base * exponent(base, --expo);
  }
};


//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
let recursiveMultiplier = (arr, num) => {
  return arr.map(function(el) {
    return el * num;
  });
};


//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
let recursiveReverse = (arr) => {
  //if the arr has one element
  if(arr.length === 1){
    //return it
    return arr[0];
  } else{
    //else return the last element and concat it to a slice array and send it to the recursive fx
    return [arr.pop()].concat(recursiveReverse(arr));
  }
};
