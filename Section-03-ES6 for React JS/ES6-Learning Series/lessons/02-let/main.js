/**
  * Arrow functions have shorter syntax than function expressions.
  * These functions also lexically bind `this` value and are always anonymous.
  */
  
let foo = ["Hello", "World"];

function letTest() {
  let y = 31;
   {console.log(y)}
  if (true) {
    let y = 71;  // different variable
    console.log(y);  // 71
  }
  console.log(y);  // 31
}
letTest()


function getValue(condition) {
    if (condition) {
        let value = 'blue';
          {
            let value = 'yellow'
                 {
                console.log(value);  
                let value = 'green'; 
                console.log(value);  
                 }
          }
        return value; 
    } 


    else {
        // value doesn't exist here
        return null;
    }
    // value doesn't exist here
}
getValue(true);

function f() {
    let  x;
console.log(x);
    {
      // okay, block scoped name
      const x = "sneaky";
      // error, const
     // x = "foo";
    }
    // error, already declared in block
   x = "inner";
  }
  
  function foo() {
    console.log(a)   // undefined 
    a = 1;                  // careful, `a` has been hoisted!

    if (a) {
        var a;              // hoisted to function scope!
        let b = a + 2;      // `b` block-scoped to `if` block!
        console.log( b );   // 3   
    }
    console.log( a );       // 1   // block level scoping 
    console.log( b );       // ReferenceError: `b` is not defined
}



