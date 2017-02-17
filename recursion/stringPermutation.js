/*
Write a function that takes a string and returns all permutations of the string. Ensure that there are no duplicates in the output.
*/

//using JS's SET which doesn't currently work
let permutations = (str) => {
  //create a mySet to store the unique results
  let mySet = new Set();
  let len = str.length;
  //create inner recurse fx (output, string)
  let recurse = (output, string) => {
    //if the string is empty
    if (!string.length) {
      //return;
      return;
    }
    //if the output.length === str.length
    else if (output.length === len) {
      //set it in mySet
      mySet.add(output);
      //return
      return;
    } else {
      //loop thru the string
      for (var i = 0; i < string.length; i++) {
        //take string[i] and recurce(string.slice(i+1))
        let newOutput = output + string[i];
        let remainder = string.slice(i + 1) || "";

        recurse(newOutput, remainder);
      };
      
    }
  };

  recurse("", str);

  return Object.values(mySet);
  //return the Object.values(mySet)
};


//working solution
let permutations = (str) => {
  //create a mySet to store the unique results
  let myObj = {};
  let len = str.length;
  let arr = str.split("");

  //create inner recurse fx (output, string)
  let recurse = (output) => {
    //if the output.length === str.length
    if (output.length === len) {
      //set it in myObj
      myObj[output] = true;
    } else {
      //loop thru the array
      arr.map((el, i) => {
        let newOutput = output + el;
        let remainder = str.slice(i + 1);
        //recurse with the new words
        recurse(newOutput, remainder);
      });
    }
  };

  recurse("");

  //return the Object.keys(myObj)
  return Object.keys(myObj);
};


permutations("rp")
