// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  var max1 = array[0], max2 = array[1], index;

  for(index = 1; index < array.length; index++) {
    if(array[index] > max1) {
      max2 = max1;
      max1 = array[index];
    }
    else
      if(array[index] > max2 && array[index] != max1)
        max2 = array[index];
  }
  return max2;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  var obj = {};
  
  for(var index = 0; index < string.length; index++) {
    var char = string.charAt(index);
  
    if(!(char >= 'a' && char <= 'z'))
      continue;
    
    if(obj[char]) {
      obj[char]++;
      continue;
    }
    
    obj[char] = 1;
  }
  return obj;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  var obj = {};
  
  for(var key1 in unflatObject) {
    if( (typeof unflatObject[key1]) == 'object' ) {
      var flatObj = flatten(unflatObject[key1]);
    
      for(var key2 in flatObj) {
        obj[key1 + "." + key2] = flatObj[key2];
      }
    }
    else
      obj[key1] = unflatObject[key1];
  }
  return obj;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  var result = {};

  for (var i in flatObject) {
    var keys = i.split('.');

    keys.reduce(function(array, current, index) {
      if(!array[current]) {
        array[current] = [];

        if(isNaN(Number(keys[index]))) {
          array[current] = {};

          if(keys.length - 1 === index)
          array[current] = flatObject[i];
        }
      }
      return array[current];
    }, result)
  }
  return result
}
