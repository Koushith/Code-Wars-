/**
 * Given an array (or string), the task is to reverse the array/string.
Examples : Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}
 */

/**
 *
reverse() - modifies original array - so use slice and reverse
 */

function revArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}
var a = [3, 5, 7, 8];

/**
 * array.pop() removes the popped element from the array, reducing its size by one. Once you're at i === 4, your break condition no longer evaluates to true and the loop ends.
 */

function revUsingPop(array) {
  var output = [];
  while (array.length) {
    output.push(array.pop());
  }

  return output;
}
console.log('rrevUsingPopev0', revUsingPop(a));
