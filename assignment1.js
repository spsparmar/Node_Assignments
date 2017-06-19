// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  var max1, max2, index; 
  max1 = array[0], max2 = array[1]; 
  
  for(index = 1; index < n; index++) { 
    if(array[index] > max1) {
    max2 = max1; 
      max1 = array[index]; 
  }
  else
    if(array[index] > max2 && array[index] != max1 || max1 == max2) 
        max2 = array[index]; 
  }
 return max2;
} 
  
// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  var obj = {};
  
  for(var i=0;i<string.length;i++) {
    var c = string.charAt(i);
  
    if( !(c >= 'a' && c <= 'z')
    continue;
  
    if(obj[c])
    obj[c]++;
    else 
      obj[c]=1;
  }
  return obj;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  var obj = {};
  for(var x in unflatObject) {
    if( (typeof unflatObject[x]) == 'object' ) {
    var flatObj = flatten(unflatObject[x]);
    
    for (var y in flatObj) {
      obj[x + "." + y] = flatObj[y];
    }
  }
  else
      obj[x] = unflatObject[x];
  }
  return obj;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  var result = {}
  for (var i in flatObject) {
    var keys = i.split('.')
    keys.reduce(function(previous, index, j) {
      return previous[index] || (previous[index] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 == j ? flatObject[i] : {}) : [])
    }, result)
  }
  return result
}
