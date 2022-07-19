let a = 50;

{
  var a = 20;
  let b = 30;
  let c = 40;
  console.log('inside block', a);
  console.log('inside block', b);
  console.log('inside block', c);
}

console.log(a);
