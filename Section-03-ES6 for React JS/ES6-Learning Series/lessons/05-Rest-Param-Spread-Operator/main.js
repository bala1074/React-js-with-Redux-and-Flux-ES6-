//Spread/Rest Operator ...
//This operator, '...', has two uses, depending on the context. In the first case we'll cover the usage as a spread operator.
//Rest parameter 
// ECMAScript 2015
function pick(object, ...keys) {
    let result = Object.create(null);

    for (let i = 0, len = keys.length; i < len; i++) {
        result[keys[i]] = object[keys[i]];
    }

    return result;
}


function sum(...number ) {
  var result = 0;
  numbers.forEach(function (number) {
    result += number;
  });
  return result;
}
console.log(sum(1)); // 1
console.log(sum(1, 2, 3, 4, 5,6,7,8,9,2,3,4,5,6,7,8)); // 15


function sum(a, b, c) {
  return a + b + c;
}
var args = [1, 2, 3];
console.log(sum(... args)); // 6



//passing y as Array
function f(x, ...y) {     y = ['hello',true];
  // y is an Array
  return x * y.length;
}
f(3, "hello", true) == 6


//passing param as var arguments 
function f(x, y=10, z=9) {
  return x + y + z;
}
// Pass each elem of array as argument spread operator 
var x = [2,3,4];
f(... x ) == 6
f(... [1,2,4,5] ) == 6




function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);

function myFunction(v, w, x, y, z) { }
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);