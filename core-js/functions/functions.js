/**
 * namaste js
 */

var x = 1;
a();
b();
console.log(x);
function a() {
  var x = 10;
  console.log(x);
  x = 30;
}

function b() {
  var x = 100;
  console.log(x);
}

/**
 * 10 100 1 - coz of hositing, 1 at last- coz of global scope
 */
