/*
Sum of Pairs
Given a list of integers and a single sum value, return the first two values 
(parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
*/

// method1: O(N^2)
// var sum_pairs=function(ints, s){
//     var index_pair = [], sum, i;
//     ints.forEach(function(num){
//       for(i = 0; i < ints.length; i++){
//         if(s === num+ints[i] && ints.indexOf(num) < i){
//           index_pair.push([ints.indexOf(num),i]);
//         }
//       }
//     });
//     index_pair.sort(function(a,b){return a[1]-b[1]});
//     return index_pair.length > 0 ? [ints[index_pair[0][0]], ints[index_pair[0][1]]]:undefined  
// }

// method2: O(N)
// var sum_pairs=function(ints,s){
//     var index_pair = [],count=1, i= 0;
//     while(i < ints.length && count <= ints.length){

//       if(count===ints.length){
//         i+=1;
//         count = i+1;
//       }
// //       console.log('the value of i is ' + i);
// //       console.log('the value of count is ' + count);
//       if(ints[i]+ints[count] === s){
//         index_pair.push([i,count]);
//       }
//       count++;
//     }
//     index_pair.sort(function(a,b){return a[1]-b[1]});
//     return index_pair.length > 0 ? [ints[index_pair[0][0]], ints[index_pair[0][1]]]:undefined
// }

// method3: O(N)
var sum_pairs = function(ints, s){
  var int_set = new Set();  // Use set to keep track of the un-dunplicate values
  var diffr;
  int_set.add(ints[0]);
  for(var i = 1; i < ints.length; i++){
    diffr = s - ints[i];    // assign the difference between the value of s and ints[i]
    if(int_set.has(diffr))  // check if we have the difference in the set
      return [diffr, ints[i]];
    int_set.add(ints[i]);   // add the value to the set for the next check
  }
  return undefined;
}
