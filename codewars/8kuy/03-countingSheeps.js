/**
 * Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
 */

let sheeps = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  return arrayOfSheep.filter((sheeps) => sheeps === true).length;
}

countSheeps(sheeps);

//other solution''

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// oldschool

function counts(sheeps) {
  let count = 0;
  for (let i = 0; i < sheeps.length; i++) {
    if (sheeps[i] === true) {
      count++;
    }
  }
  return count;
}

console.log('count', counts(sheeps));

// or

function countSheeps(arrayOfSheep) {
  var count = 0;

  arrayOfSheep.forEach(function (sheep) {
    if (sheep) count++;
  });

  return count;
}
