var fs = require('fs');
var fileArray= ['file1','file2','file3','file4','file5'];

console.log("============");	

function myreadfile(index)	{
	if(index==fileArray.length) return;

	fs.readFile(fileArray[index], 'utf8', function(error,data)	{  
		console.log(data);
		console.log("============");
		myreadfile(index+1);
		
	});
}
readfile(0);