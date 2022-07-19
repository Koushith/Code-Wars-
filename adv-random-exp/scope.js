// var a = 20;
// let b = 80;
// function test() {
//   // console.log(b);
//   var x = 30;
// }

// test();

var x = 'x';

function findName() {
  var b = 'b';

  return printName();
}

function printName() {
  var c = 'c';
  return console.log('koushith');
}

function sayMyName() {
  var a = 'a';

  return findName();
}

sayMyName();

/**
 * printName- c= c -koushith
 * findName()- b='b'
 * sayMyName  -- a='a'
 * global- x='x'
 */
