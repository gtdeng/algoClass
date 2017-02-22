/*
QUICK SORT

*** Description

Like merge sort, quick sort employs a divide and conquer strategy.

It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

*** Exercises

- Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
- Implement quicksort
- Identify time complexity

- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

*** Extra Credit

Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

*/


let quickSort = (arr) => {
  //It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

  //set base case of when arr has less than one value
  if (arr.length <= 1) {
    return arr;
  }

  var leftArr = [];
  var rightArr = [];

  //choose pivot position
  var pivot = arr[Math.floor(Math.random()*arr.length)];

  //loop thru arr
  arr.map((el) => {
    //if el less than pivot value
      //push to leftArr 
    //else push to rightArr
    el <= pivot? leftArr.push(el):rightArr.push(el);
  });

  //recursively call quickSort on the left and right then return it
  return quickSort(leftArr).concat(quickSort(rightArr));
};


quickSort([2, 3, 4, 7, 1, 5, 6]);
