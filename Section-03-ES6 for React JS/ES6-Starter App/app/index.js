
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