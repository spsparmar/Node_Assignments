var fs = require('fs');

var fileReader = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (error, data) => {
      console.log(data); 
      console.log("============");

      if(error)
        return reject(error);
      resolve(fileName + 'fileDone');
    });
  });
};

console.log("============");

fileReader('file1').catch(() => {
       console.log("error in file1");
  })
 .then(() => {
    return fileReader('file2')
  }).catch(() => {
       console.log("Error in file2");
  })
 .then(() => {
    return fileReader('file3')
  }).catch(() => {
       console.log("error in file3");
  });
