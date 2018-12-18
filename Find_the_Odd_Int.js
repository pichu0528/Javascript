/*
Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  var c_count = {};                    // create an js object to keep track of the count of each character
  for(var i = 0; i < A.length; i++){   // loop through the array to fill the js object
    if(c_count[A[i]] === undefined)    // if the character is undefined in the object, assign 1 to the character key
      c_count[A[i]] = 1;
    else                               // else increment the count by 1
      c_count[A[i]] += 1;
  }

  // use Number() method to convert the string value to integer
  // use Object.keys() to find the list of key from the js object
  // use Array.find() to find a particular key
  return Number(Object.keys(c_count).find(key => c_count[key]%2 !== 0));
}
