/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  var c_list = str.split(' ');
  var new_word, pig_list = [];
  c_list.forEach(function(word){
//     if(word.match(/[a-z]/g)){
//       new_word = word.slice(1) + word[0] + 'ay';
//     }
//     else{
//       new_word = word;
//     }
//     pig_list.push(new_word);
// below is the shorter version of the code above (ternary operator)
    new_word = word.match(/[a-zA-Z]/g) ? word.slice(1) + word[0] + 'ay': word;
    pig_list.push(new_word);

  });
  return pig_list.join(' ');
}
