var fs = require('fs');

var file1= function() {
  fs.readFile('file1', 'utf8', function(error, data) {
    console.log(data); console.log("============");
    return new Promise( function(resolve, reject) {
      resolve('file1_done');
    });
  });
};

var file2= function() {
  fs.readFile('file2', 'utf8', function(error, data) {
    console.log(data); console.log("============");
    return new Promise( function(resolve, reject) {
      resolve('file2_done');
    });
  });
};

var file3= function() {
  fs.readFile('file3', 'utf8', function(error, data) {
    console.log(data); console.log("============");
    return new Promise( function(resolve, reject) {
      resolve('file3_done');
    });
  });
};

console.log("============");
Promise.all([file1(),file2(),file3()]);