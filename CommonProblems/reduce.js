const arr = [5, 7, 2, 4];

const sum = arr.reduce((acc, curr) => (acc += curr));

/**
 * ADD KOU AND RETURN OBJ
 */

let words = ['hello', 'world', 'hello', 'dogs', 'hello', 'cats'];

const transformed = words.reduce((acc, curr) => {
  acc[curr] = 'kou';
  return acc;
}, {});

console.log(transformed);

// const countWords = wordList => {
//   return wordList.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
//   }, {});
// };
