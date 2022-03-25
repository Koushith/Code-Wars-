/**
 * output of one fn is the input to another function.
 */

const logMyName = (msg) => `Koushith says ${msg}`;

const logWithId = (msg) => `ID :122451 , ${msg}`;

const logqithIdandName = () => logWithId(logMyName('hiii'));

console.log(logqithIdandName());
