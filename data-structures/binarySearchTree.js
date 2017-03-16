/*
BINARY SEARCH TREES

Abstract data type
A binary search tree is a tree with the additional constraints:
- each node has only two child nodes (node.left and node.right)
- all the values in the left subtree of a node are less than or equal to the value of the node
- all the values in the right subtree of a node are greater than the value of the node

*** Operations:

bsTree.insert(value)
=> bsTree (return for chaining purposes)
Insert value into correct position within tree

bsTree.contains(value)
=> true/false
Return true if value is in tree, false if not

bsTree.traverseDepthFirst_inOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name).

bsTree.traverseDepthFirst_preOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)

bsTree.traverseDepthFirst_postOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)

bsTree.isValid()
=> returns true if BST is a valid BST otherwise returns false. This method is useful for checking your other methods.

bsTree.removeNode(value)
=> node
Remove node from tree.

bsTree.checkIfFull()
=> true/false
A binary tree is full if every node has either zero or two children (no nodes have only one child)

bsTree.checkIfBalanced()
=> true/false
For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.


*** Additional Exercises:
A binary search tree was created by iterating over an array and inserting each element into the tree. Given a binary search tree with no duplicates, how many different arrays would result in the creation of this tree.

*/

function BinarySearchTree (value) {
  this._value = value;
  this._left = null;
  this._right = null;
}



BinarySearchTree.prototype.insert = function(value) {
  // implement me...
  //if the value already exists
  if (this._value === value) {
    //return "value exists"
    return "value exists";
  }

  //create a new bst
  let bst = new BinarySearchTree(value);

  //if value-arg < value
  if (value < this._value) {
    //if the left pointer is null
    if (!this._left) {
      //store bst on the left side
      this._left = bst;
    } else {
      //else call insert on the left side
      this._left.insert(value);
    }
  }

  //if value-arg > value
  if (value > this._value) {
    //if the right pointer is null
    if (!this._right) {
      //store bst on the right side
      this._right = bst;
    } else {
      //else call insert on the right side
      this._right.insert(value);
    }
  }
};
// Time complexity: O(logn)



BinarySearchTree.prototype.contains = function(value) {
  // implement me...
  if (this._value === value) {
    return true;
  }

  //else if value-arg > current value and the right is not null
  if (value > this._value && this._right) {
    //go right and check that tree
    return this._right.contains(value);
  }

  //if value-arg < current value and the left is not null
  if (value < this._value && this._left) {
    //go left and check that tree
     return this._left.contains(value);
  }

  return false;
};
// Time complexity: O(log n)

BinarySearchTree.prototype.traverseDepthFirst_inOrder = function(fn) {
  // implement me...
  //SO this would mean go all the way down the tree and start from the smallest value (left down most) and go up and right to the largest (right down most)

  // //if left side has something
  // if (this._left) {
  //   //dig into it and call traverseDepthFirst_inOrder(fn) on it. 
  //   this._left.traverseDepthFirst_inOrder(fn);
  // }
  this._left && this._left.traverseDepthFirst_inOrder(fn);

  //regardless of whether left side has something or not, we will still need to
  //call fn on the current value (this._value)
  fn(this._value);

  // //then check if right side has something
  // if (this._right) {
  //   //dig into it and call traverseDepthFirst_inOrder(fn) on it.
  //   this._right.traverseDepthFirst_inOrder(fn);
  // }
  this._right && this._right.traverseDepthFirst_inOrder(fn);
};
// Time complexity:



BinarySearchTree.prototype.isBalanced = function() {
  // implement me...
  const levels = [];

  const traverse = (node, level) => {
    //i want to keep traversing until i hit the end
    //at the end i want to exit and then push the number to the levelsArray
    //if there's any left or right trees, call traverse of that node

    if (!node._left && !node._right) {
      levels.push(level);
      return;
    }

    node._left && traverse(node._left, ++level);
    node._right && traverse(node._right, ++level);
  };

  traverse(this, 0);

  const min = Math.min(...levels);
  const max = Math.max(...levels);

  return max-min <= 1;
};
// Time complexity: O(n)




//TEST CASES:
var bst = new BinarySearchTree(4);

bst.insert(5);
bst.insert(1);
bst.insert(6);
bst.insert(7);
bst.contains(7);
bst.isBalanced()


function cl(x) {
  console.log(x);
}

bst.traverseDepthFirst_inOrder(cl)
