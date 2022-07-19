// const add = (num1) => (num2) => num1 + num2;

function add(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

/**
 * create a function that takes your name and returns a function which would add your name to anything that function says.
 *
 * eg:  koushithsays("hello")  // "Koushith says, "hello"""
 */

const nameLogger = (name) => (msg) => console.log(`${name} says ${msg}`);

nameLogger('koushith')('react is awesome');
