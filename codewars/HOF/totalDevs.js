/**
 * You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
your function should return the following object (associative array in PHP):

{ C: 2, JavaScript: 1, Ruby: 1 }
 */

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

// { C: 2, JavaScript: 1, Ruby: 1 } -
function countLanguages(list) {
  list.reduce(function (acc, current) {
    if (acc[current.language]) {
      acc[current.language]++;
    } else {
      acc[current.language] = 1;
    }
    return acc;
  }, {});
}

console.log(countLanguages(list1));

function countLanguages(list) {
  // thank you for checking out the Coding Meetup kata :)
  // declare object to contain count for each language
  let langCount = {};

  // loop through each object in the array
  for (let i = 0; i < list.length; i++) {
    // find language for each developer
    // add language to object if it does exist
    if (langCount[list[i].language] === undefined) {
      langCount[list[i].language] = 1;
    } else {
      // otherwise increment language count by 1
      langCount[list[i].language]++;
    }
  }

  // return object
  return langCount;
}
