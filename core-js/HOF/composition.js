/**
 * output of one fn is the input to another function.
 */

const logMyName = (msg) => `Koushith says ${msg}`;

const logWithId = (msg) => `ID :122451 , ${msg}`;

const logqithIdandName = (msg) => logWithId(logMyName(msg));

console.log(logqithIdandName('Hello Everyone'));
