/**
 * let and const are hoisted- but they are not in global space- they will be in a seperate memory space- TDZ- the timeframe when var is declared and initilized is called TDZ. if yu try to access the elements which are in tdz- you will get reference error.
 */

let a;

a = 20;
console.log(a);
