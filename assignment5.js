var fs = require('fs');

var fileReader= function(file_name) {
  fs.readFile(file_name, 'utf8', function(error, data) {
    console.log(data);
    console.log("============");
    return new Promise( function(resolve, reject) {
      resolve(file_name+'file_done');
    });
  });
};

console.log("============");
Promise.all([fileReader('file1'),fileReader('file2'),fileReader('file3')]);