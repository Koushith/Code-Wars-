// function z() {
//   let b = 900;
//   function x() {
//     let a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }

// z();

/**
 *  combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)
 * - When functions are returned they still remember their lexical scope.
- When functions are returned they remember the reference to variables, not the values.
- Uses of Closures:
    - Module Design Pattern
    - Currying
    - Memoize
    - Function like once
    - setTimeout
    - Iterators
    - Maintaining state in Async World
 */

let name = 'safari';
name = 'chrome';
function makeFunc() {
  let name = 'Mozilla';

  function displayName() {
    name = 'opeara';

    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
console.log(name);
myFunc();
//chrome opeara
