/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

url: https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1440/
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(s.length===0) return [];
    
    let temp = s.pop();
    reverseString(s);
    return s.unshift(temp);
};
