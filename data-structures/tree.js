/*
TREES

Abstract data type

General Tree:
A tree has a root node.
The root node has 0 or more children.
Each child node has 0 or more children.
(each node in the tree can be seen as a subtree)

Constraints:
A child has only one parent and the root node has no parent.
Note: A tree is a special type of graph. A tree is a graph without cycles.

*** Operations:

tree.addChild(value)
=> child node (new tree)
add child to tree/subtree and return child node (which should be a tree instance)

tree.contains(value)
=> true/false
Return true if value is in tree, false if not

tree.traverseDepthFirst(callback)
=> undefined
Invoke the callback for every node in a depth-first order

tree.traverseBreadthFirst(callback)
=> undefined
Invoke the callback for every node in a breadth-first order

*** Additional Exercises:
Given treeA and treeB, check if treeB is a subtree of treeA (meaning that there exists a node n in treeA such that the subtree of n is identical to treeB).

Given a dictionary, create a prefix tree (commonly known as a trie)
https://en.wikipedia.org/wiki/Trie

*/

function Tree(value) {
  // implement me...
  this._value = value;
  this._children = [];
}



Tree.prototype.addChild = function(value) {
  // implement me...
  let node = new Tree(value);
  this._children.push(node);

  //returning the node so that it is possible to chain trees
  return node;
};
// Time complexity: O(1)



Tree.prototype.contains = function(value) {
  // implement me...
  let contains = false;

  if (this._value === value) {
    return contains = true;
  }

  for (let i = 0; i < this._children.length; i++) {
    contains = this._children[i].contains(value);

    if (contains) {
      return contains;
    }
  }

  return contains;
};
// Time complexity: O(n)



Tree.prototype.traverseDepthFirst = function(fn) {
  // implement me...
  //This means starting from top, go left, evaluate, repeat until nothing on the left and then start going right, up then right; according to the diagram.

  fn(this._value);

  this._children.map((child) => {
    //if the child has children
    if (child._children.length) {
      //traverse down into it
      child.traverseDepthFirst(fn);
    } else {
      //else just call the fn on the child's value
      fn(child._value);
    }
  });

};
// Time complexity: O(n)




Tree.prototype.traverseBreadthFirst = function(fn) {
  // implement me...
  //This means to finish the top level before moving down a level

  //call fn on the root node
  fn(this._value);

  //create copy of the root node's children array and set it in the queue
  let queue = this._children.slice();

  //while there's things in the queue, keep running
  while (queue.length) {
    let child = queue.shift();

    //run the fn on the first queued value and remove it
    child && fn(child._value);

    //if the child has children
    if (child._children.length) {
      //push them to the queue
      queue = queue.concat(child._children);
    }
  }

};
// Time complexity: O(n)



//TEST CASES:
//refer to the 450px-Breadth-first-tree.svg---Order in which the nodes are expanded.png
let tree = new Tree(1);
let two = tree.addChild(2);
two.addChild(5);
two.addChild(6);
tree.addChild(3);
let four = tree.addChild(4);
four.addChild(7);
four.addChild(8);

tree.contains(8);

function cl(x) {
  console.log(x);
}

tree.traverseDepthFirst(cl);
tree.traverseBreadthFirst(cl);
