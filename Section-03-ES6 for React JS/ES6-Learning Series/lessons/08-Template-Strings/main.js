/**
  * Arrow functions have shorter syntax than function expressions.
  * These functions also lexically bind `this` value and are always anonymous.
  */
  
var x = "foo";
var y = "bar";
//String interpolation
// 
// es5
var join = x + "addition of x & y " +y; // foo bar
// es6


var join1 = `${x} ${y}`; // foo bar
console.log(join1);
console.log(join);    
console.log( `hello
	everyone 
	my 
	vars  
	${x}
	${y}`);
//Template String 
//Strinf Interpolation 