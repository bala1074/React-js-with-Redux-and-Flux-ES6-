/**
  * Arrow functions have shorter syntax than function expressions.
  * These functions also lexically bind `this` value and are always anonymous.
  */
  
let foo = ["Hello", "World"];
//default arguments
function f(x, y=12, z = 10) {
  // y is 12 if not passed (or passed as undefined)
  //argument
  return x + y + z;
}
f(3) == 25;
f(4,5);
f(4,4,4);

function foo(x, y=5){}
function foo(x=5, y=5){}
function foo(x, y="hello", z=this){}

//ES5 

