/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/


let insertionSort = (arr) => {
  let temp;

  // Iterate over array and grow a sorted array behind current element.
  //ii. loop thru the array from left to right
  for (var i = 1; i < arr.length; i++) {
    // For each position, compare value of element with previous elements and swap positions if previous element is larger.
    //jj. loop thru the prev elements from curr to leftmost
    //if the curr < the one on it's right
    for (var j = i; arr[j] < arr[j - 1]; j--) {
      //swap
      temp = arr[j];
      arr[j] = arr[j-1];
      arr[j-1] = temp;
    }
  }

  return arr;
};



insertionSort([5, 4, 3, 6, 2, 1]);
