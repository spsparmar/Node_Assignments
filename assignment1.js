// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?

<script type="text/javascript">
function secondLargest(array) {
 var i; var sh;
var fh=array[0];
if(array.length > 2) {
          for(i=0;i<array.length;i++) {
          if(array[i]>fh) fh=array[i];
        }
        sh=array[0];

        for(i=0;i<array.length;i++) {
          if(array[i]!=fh){
            if(array[i]>sh) sh=array[i];
          }
        }
}
else  {
  if(array[0]>array[1]) sh=array[1];
  else sh=array[0];
}
return sh;
}

</script>

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
<script type="text/javascript">
function calculateFrequency(string) {
  var obj = {};
  for(var i=0;i<string.length;i++) {
    var c= string.charAt(i);
    
    if(c>='a' && c<='z') {
           if(obj[c]) obj[c]++;
        else (obj[c]=1);
      }
  }
  return obj;
}
</script>
// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  // Write your code here
  <script type="text/javascript">
  var obj = {};
	
	for (var x in unflatObject){
		
		if ((typeof unflatObject[x]) == 'object') {
			var flatObj = flatten(unflatObject[x]);
			for (var y in flatObj) {
				
				obj[x + "." + y] = flatObj[y];
			}
		} else {
			obj[x] = unflatObject[x];
		}
	}
  console.log(obj);
	return obj;
}
</script>

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
<script type="text/javascript">
function unflatten(flatObject) {
  // Write your code here
}
</script>