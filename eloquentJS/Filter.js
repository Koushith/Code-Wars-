// The following example uses filter() to create a filtered array that has all elements with values less than 10 removed.

let filtered = [12, 5, 8, 130, 44];

// function isBigEnough(value) {
//   return value > 40;
// }

// console.log(filtered.filter(isBigEnough));
//console.log(filtered.filter((val) => val > 10)); //12 ,120, 44

// Searching in array
// Following example uses filter() to filter array content based on search criteria.

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filter array items based on search criteria (query) - search for grapes
 */

let filteredFruits = fruits.filter((searhItem) => searhItem === 'grapes');

// console.log(filteredFruits);

/**
 * Filtering an array of objects
A common use case of .filter() is with an array of objects through their properties:
 */
var heroes = [
  { name: 'Batman', franchise: 'DC' },
  { name: 'Ironman', franchise: 'Marvel' },
  { name: 'Thor', franchise: 'Marvel' },
  { name: 'Superman', franchise: 'DC' },
];

// return the array which has marvel franchise

console.log(heroes.filter((franc) => franc.franchise === 'Marvel'));
