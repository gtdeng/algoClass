/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?




 */

function Queue(capacity) {
  // implement me...
  // needs a capacity variable
  // needs a ds to store the enquequed values (object)
  // needs a pointer to select the first value in line
  // needs a pointer to select the last value in line
  this._max = capacity || Infinity;
  this._storage = {};
  this._first = 0;
  this._last = 0;
  this._length = 0;
}

Queue.prototype.enqueue = function(value) {
  // implement me...
  // if we're at capacity
  if(this._length === this_max) {
    // throw error
    throw new Error("We're at max capacity. Dequeue an item before enqueueing.");
  } else {
    // set the value as the last value in the storage && increment last pointer
    this._storage[this._last++] = value;
    // increment the length then return it
    return ++this._length;
  }
};
// Time complexity:
// O(1)

Queue.prototype.dequeue = function() {
  // implement me...
  // if there's nothing to dequeue
  if(this._length === 0) {
    // throw an error
    throw new Error("The queue is empty. There's nothing to dequeue.");
  } else {
    // decrement length
    this._length--;
    // return value of the first item and increment the first pointer
    return this._storage[this._first++];
  }
};
// Time complexity:
// O(1)

Queue.prototype.peek = function() {
  // implement me...
  // if there's nothing to dequeue
  if(this._length === 0) {
    // throw an error
    throw new Error("The queue is empty. There's nothing to see here.");
  } else {
    // return value of the first item and increment the first pointer
    return this._storage[this._first];
  }
};

Queue.prototype.count = function() {
  // implement me...
  return this._length;
};
// Time complexity:
// O(1)


//TESTS:
var q = new Queue(10);
q.count();
q.enqueue("one");
q.enqueue("two");
q.count();
q.peek();
q.dequeue();
q.count();
q.enqueue("three");
q.count();
q.dequeue();
q.peek();


/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */
