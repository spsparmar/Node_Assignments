var fs = require('fs');
var fileArray = ['file1', 'file2', 'file3', 'file4', 'file5'];

function myReadfile(index) {
  if(index === fileArray.length)
    return;

  fs.readFile(fileArray[index], 'utf8', function(error, data) {
    if(error) {
      console.log(error + ":File" + (index + 1) );
    }

    console.log(data);
    console.log("============");
    myReadfile(index + 1);
  });
}

console.log("============");
myReadfile(0);
