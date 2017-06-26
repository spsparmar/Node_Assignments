var fs = require('fs');
var fileArray = ['file1', 'file2', 'file3', 'file4', 'file5'];

console.log("============");

function myReadfile(index) {
  if(index === fileArray.length)
    return;

  fs.readFile(fileArray[index], 'utf8', function(error, data) {
    try {
      console.log(data);
      console.log("============");
    }
    catch(error) {
      console.log(error + "unable to read file");
    }
    finally {
      myReadfile(index + 1);
    }
  });
}
myReadfile(0);
