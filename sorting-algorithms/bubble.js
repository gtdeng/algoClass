/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/


let bubbleSort = (array) => {
  //copy the array-input only for this algo
  let a = array.concat();
  let len = a.length - 1;
  let swapped = true;

  //Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array
  while (swapped) {
    //start with swapped = false, so that it doesnt run again.
    swapped = false;
    //remember that we're setting i<len, so that (i+1) doesnt turn out to be undefined.
    for (let i = 0; i < len; i++) {
      if (a[i] > a[i + 1]) {
        //if there needs to be a swap
        //set swapped = true, at the end.
        swapped = true;
        //then do the swapping.
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
      }
    }
  }

  return a;
};



bubbleSort([5, 4, 3, 6, 2, 1]);
