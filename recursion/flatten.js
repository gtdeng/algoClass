/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

let flatten = (nestedArray) => {
  return nestedArray.reduce((prev, el) => {
    if (Array.isArray(el)) {
      return prev.concat(flatten(el));
    } else {
      return prev.concat(el);
    }
  }, []);
};
