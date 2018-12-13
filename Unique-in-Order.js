/*
Implement the function unique_in_order which takes as argument a sequence and 
returns a list of items without any elements with the same value next to each 
other and preserving the original order of elements.
For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder=function(iterable){
  
  var new_list = [];
  // Corner Case: if iterable is empty, return the empty list
  if(iterable.length === 0){
    return new_list;
  }
  // Push the first item in the iterable object to the list
  new_list.push(iterable[0]);
  
  // For loop to compare the current value with its previous value
  // if it is different, push the value to the new_list
  for(var i = 1; i < iterable.length; i++){
    if(iterable[i-1] !== iterable[i]){
        new_list.push(iterable[i]);
    }
  }
  return new_list;
}
