let fs = require("fs");

function readFile(filename) {
    return new Promise(function(resolve, reject) {
        // trigger the asynchronous operation
          // db call // file read 
          // async reading a file 
           fs.readFile(filename, { encoding: "utf8" }, function(err, contents) {
            // check for errors
            if (err) {
                reject(err);
                return;
            }
            // the read succeeded
            resolve(contents);
        });
    });
}

let promise = readFile("example.txt");
let promise1 = readFile("example.txt");
let promise2 = readFile("example.txt");

Promise.all([promise,promise1,promise1]).spread(function(data){
   var res0 = data[0];
   var res1 = data[1];
   var res2 = data[2];
})

Q.all([promise,promise1,promise1]).spread(function(data){
    var res0 = data[0];
   var res1 = data[1];
   var res2 = data[2];
})