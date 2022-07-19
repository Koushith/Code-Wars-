// hoisting-

// function hoist() {
//   console.log(name);
//   const name = 'koushith';
// }

// console.log(hoist());

// const a = 10;
// function example() {
//   const b = 20;
//   function inner() {
//     const c = 20;
//     console.log(a, b, c);
//   }
//   console.log('invoking inner, ', inner());
// }

// console.log(example());

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }

// const fn = outer();
// fn();
// fn();
// fn();
// fn();
// fn();
// fn();

// closure exercise - memoization

function square(num) {
  return num * num;
}

function memoizedSquare() {
  let cache = {};
  console.log(cache);
  return function optimizedSquare(num) {
    if (num in cache) {
      console.log('returning from cache');
      return cache[num];
    } else {
      console.log('computing square');
      const result = square(num);
      cache[num] = result;
      return result;
    }
  };
}

const memoSquare = memoizedSquare();
console.log(memoSquare(2));
console.log(memoSquare(2));
console.log(memoSquare(5));
console.log(memoSquare(8));
console.log(memoSquare(8));
