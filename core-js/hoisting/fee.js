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

// console.log(parent());

/**
 * when its comes to variable hosting, only the declaration with the value undefined is hoisted,
 *
 * but in case of function declarations, the defnitions { whole body} is hoisted.
 *
 * now in such cases of multiple declaration (in same scope) with same identifier, the hoisting of variables is simply ignored. the interepretr comes across the function declaration and hoists it.the statement of variable assignment (which was not hoisted) is executed and “I’m a variable” is assigned to hoisted, which is a simple string value and not a function. Hence the error!
 */

/*********************************************************************************************** */

//console.log(foo()); //3
function foo() {
  var bar = function () {
    return 3;
  };
  return bar();
  var bar = function () {
    return 8;
  };
}

/**
 * returns 3 coz- goo itsself stored in global memory and inside there is a function exporession- which isa treadted as a vaiable and in the first phase it will be undefined and then whole fun will be copied. as soon as line enters return, bar() is called and 3 is returned. fn will not read the bar() which is below return
 *
 * The function foo() itself will be hoisted in the global scope as its a function declaration. As for inside foo(), its a clear case of function expression for both the bar()functions.

The second bar() will not be read by the interpreter ahead of time (no hoisting). The first one will be executed and returned.
 *
 */

/******************************************************************************************************* */

var myVar = 'foo';
(function () {
  console.log('Original value was: ' + myVar);
  var myVar = 'bar';
  console.log('New value is: ' + myVar);
})();

/**
 * Original value was: undefined
fee.js:85 New value is: bar

first one is in global scope''

even the fun is in global scope
inside functions local scope, there is one more variable with the same name- it will be assiged with undefined in firstphase. if there was no same var, it would have picked from global scope.

 */

/**
 * https://www.idontknowjavascript.com/2019/05/javascript-hoisting-interview-question.html
 * https://medium.com/@pvivek4/hoisting-demystified-with-popular-interview-questions-38a93ea441ff
 * https://www.geeksforgeeks.org/scoping-hoisting-javascript/
 * https://www.educative.io/courses/javascript-interview-handbook/JEq08o7oPZJ
 * https://dev.to/midasxiv/scopes-hoisting-closures-tricky-questions-4c85
 * https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/hoisting.md
 * https://javascript.plainenglish.io/5-useful-and-tricky-javascript-questions-4b50b5106a2b
 * https://www.javascripttutorial.net/javascript-hoisting/
 *
 *
 * revisit aftercovering scopes, let,var,const
 */
