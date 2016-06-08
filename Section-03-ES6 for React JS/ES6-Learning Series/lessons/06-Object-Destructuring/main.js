/**
  * Arrow functions have shorter syntax than function expressions.
  * These functions also lexically bind `this` value and are always anonymous.
  */
//object initilizer 

var [a, b] = [1, 2];
console.log(a, b);
//=> 1 2

// Use from functions, only select from pattern
var foo = () => {
  return [1, 2, 3];
};

var [a, ,c,d,e] = foo();   
console.log(a, b);
console.log(b);
console.log(a);
// => 1 2


// Omit certain values
var [a, , b] = [1, 2, 3];
console.log(a, b);
// => 1 3

//spread operator 
// Combine with spread/rest operator (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3];
console.log(a, b);
