/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
  var char_arr = text.toLowerCase().split('');
  var char_obj = {};
  var count = 0;
  
  // Use an object to keep track the character count in a given text
  for(var i = 0; i < char_arr.length; i++){
    if(char_obj[char_arr[i]] == undefined)
      char_obj[char_arr[i]] = 1
    else
      char_obj[char_arr[i]] += 1
  }
  
  // Look at each values from the object to see if the count is greater than 1
  // If it is, then we increment count
  for(var j = 0; j < Object.values(char_obj).length; j++){
	  if(Object.values(char_obj)[j] > 1)
	    count++;
  }
  return count;
}
