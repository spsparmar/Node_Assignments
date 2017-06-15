var fs = require('fs');

var fileReader = function(fileName) {
  return new Promise( (resolve, reject) => {
    fs.readFile(fileName, 'utf8', function(error, data) {
      console.log(data); 
      console.log("============");

      if(error)
        return reject(fileName + 'file not Done');
      resolve(fileName + 'fileDone');
    });
  });
};

console.log("============");

fileReader('file1')
 .then(function() {
    return fileReader('file2')
  })
 .then(function() {
    return fileReader('file3')
  });

