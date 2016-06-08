let fs = require("fs");

function readFile(filename) {
    return new Promise(function(resolve, reject) {
        //resolve(55);
        fs.readFile(filename, { encoding: "utf8" }, function(err, contents) {
            if (err) {
                reject(err);
                return;
            }
            resolve(contents);
        });
    });
}
let promise = readFile("example.txt");
// listen for both fulfillment and rejection
promise.then(function(contents) {

     let promise1 = readFile("example.txt");
    promise1.then(function(contents){}, function(error){ })
}, function(err) {
    console.error(err.message);
});