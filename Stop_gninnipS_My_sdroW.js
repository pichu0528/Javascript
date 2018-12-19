/*
Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). Strings 
passed in will consist of only letters and spaces. Spaces will be included only when more 
than one word is present.

Examples:
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

// method1
function spinWords(s){
  word = s.split(' ');
  console.log(word);
  console.log(word instanceof Array)
  for(var i = 0; i < word.length; i++){
    console.log(word[i])
    console.log(word[i].length)
    if(word[i].length > 4){
      word[i] = word[i].split('').reverse().join('');
    }
  }
  console.log(word.join(' '));
}

// method2
function spinWords(s){
  var word = s.split(' ');
  var my_list = [];
  word.forEach(function(w){
    if(w.length > 4)
	    my_list.push(w.split('').reverse().join(''));
    else
	    my_list.push(w);
  });
  return my_list.join(' ');
}
