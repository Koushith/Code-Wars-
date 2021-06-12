// closures

// function x() {
//   let a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// const returned = x();
// console.log(returned);
// returned();

function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    console.log('from inner func', name);
  }
  return displayName();
}

var myFunc = makeFunc();
//myFunc();
//console.log(makeFunc());

//

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));
