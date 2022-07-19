function hello() {
  console.log('hello');
}

// function countDwon(num) {
//   if (num <= 0) {
//     console.log('All Done');
//     return;
//   }
//   console.log('bef', num);
//   num--;
//   countDwon(num);
// }
// countDwon(10);

// iterative
function count(num) {
  for (let i = num; i > 0; i--) {
    console.log('rev', i);
  }
}

//count(10);

function sumRange(num) {
  if (num === 1) return 1;

  return num + sumRange(num - 1);
}
//console.log(sumRange(3));

// factorial-
// iterative way
function factorial(num) {
  let total = 1;
  for (i = num; i > 0; i--) {
    total *= i;
  }

  return total;
}
//console.log(factorial(3));

function factorial(num) {
  // base case- return 1 as soon as num==1. 1!==1
  if (num == 1) return 1;
  return num * factorial(num - 1); //sum the num by 1 and multiply with number which we passed. eg- num=5 =
  //factorial= num*num-1  5*5-1 =4  4*4-1 ...
}
console.log(factorial(5));
