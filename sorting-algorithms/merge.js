/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/


let mergeSort = (arr) => {
  //set base case of when there's only one element in the array
  if (arr.length === 1) {
    return arr;
  }

  //find the midpoint
  var mid = Math.floor(arr.length/2);

  //split the array into an unsorted left and right side
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  //pass the unsorted array to mergeSortFx to continue splitting it until it reaches an array of one element
  leftSorted = mergeSort(left);
  rightSorted = mergeSort(right);

  //return and pass the unsorted array to mergeFx to join and get a merged and sorted array
  return merge(leftSorted, rightSorted);
};


//given two unsorted array, return a single merged sorted array
let merge = (left, right) => {
  //take the longer array and compare the values
  //set the long and short arrays
  var long = left.length >= right.length? left:right;
  var short = left.length < right.length? left:right;
  var output = [];

  //set longPointer and shortPointer and a counter to keep track of the amount of times to loop
  var longPointer = 0;
  var shortPointer = 0;
  var counter = left.length + right.length;
  
  //while there are still elements that haven't been traversed
  while(counter) {
    //decrement counter
    counter--;
    //if the current element in long < current element in short
    //OR if we've exhausted the short array
    if (long[longPointer] < short[shortPointer] || short[shortPointer] === undefined) {
      //push the current element in long to the output array
      output.push(long[longPointer]);
      //increment the longPointer;
      longPointer++;
    } else {
      //push the current element in short
      output.push(short[shortPointer]);
      //increment the shortPointer
      shortPointer++;
    }
  }

  return output;
};

mergeSort([2, 3, 4, 7, 1, 5, 6]);
