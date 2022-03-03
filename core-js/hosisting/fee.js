/**
 * Guess the output and explain why
 */

function foo() {
  function bar() {
    return 3;
  }
  return bar();
  function bar() {
    return 8;
  }
}

//console.log(foo());

//8why?

/**
 * first memory is allocated - in case of fn declaratons- whole function is assiged. and insode local scope there are other functions, again brand new execution context is created.
 *
 * foo() - scans and in return we are calling bar()
 * due to hoisting bar will be called and 8 will be returned.
 */

/***************************************************************************************************************** */

function parent() {
  var hoisted = "I'm a variable";
  function hoisted() {
    return "I'm a function";
  }
  return hoisted();
}
//console.log(parent()); // TypeError: hoisted is not a function”

function parent() {
  // Function declaration hoisted with the definition
  function hoisted() {
    return "I'm a function";
  }
  // Declaration ignored, assignment of a string
  hoisted = "I'm a variable";
  return hoisted();
}

console.log(parent());

/**
 * when its comes to variable hosting, only the declaration with the value undefined is hoisted,
 *
 * but in case of function declarations, the defnitions { whole body} is hoisted.
 *
 * now in such cases of multiple declaration (in same scope) with same identifier, the hoisting of variables is simply ignored. the interepretr comes across the function declaration and hoists it.the statement of variable assignment (which was not hoisted) is executed and “I’m a variable” is assigned to hoisted, which is a simple string value and not a function. Hence the error!
 */
