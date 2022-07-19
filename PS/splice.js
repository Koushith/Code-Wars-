// The splice() method adds/removes items to/from an array, and returns the removed item(s).

//Note: This method changes the original array.
// array.splice(index, howmany, item1, ....., itemX)
// parameters- index- required  -An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array

// howmany- 	Optional. The number of items to be removed. If set to 0, no items will be removed
// item1, ..., itemX Optional. The new item(s) to be added to the array

var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// add 2 ele on 2nd index- dont remove
fruits.splice(2, 0, 'test', 'text1');
//console.log(fruits);

// add 2 ele on 2nd index-  remove whats there on 2nd index.

fruits.splice(2, 1, 'h1', 'h2');

//console.log(fruits);

// add 2 ele on last nd index-  remove whats there on last 2nd index.

fruits.splice(-2, 1, 'last', 'second');

//console.log(fruits);

// add my mane in second index- dont delete anything.

fruits.splice(2, 0, 'kou');
console.log(fruits);

// At position 2, remove 2 items:
fruits.splice(2, 2);
