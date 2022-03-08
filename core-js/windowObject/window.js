var a = 10;
let b = 20; // this will be in TDZ

function c() {
  let d = 30;
  console.log(d);
  console.log(this === window);
}
console.log(b);
c();

/**
 *
 * here- global execution context is created and all the global varables which is out of functions are attached to window obj. js engine created this. along with the window object- this will be create- at global level, this===window.
 *
 *
 *
 * todo - check about this and window insode the function
 */
