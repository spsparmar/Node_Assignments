var fs = require('fs');

var fileReader = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (error, data) => {
      if(error)
        return reject(error);

      console.log(data); 
      console.log("============");
      resolve(fileName);
    });
  });
};

console.log("============");

fileReader('file1')
 .then((fileName) => {
    return fileReader('file2')
  })
 .then((fileName) => {
    return fileReader('file3')
  })
 .catch((error) => {
      console.log(error);
  });
