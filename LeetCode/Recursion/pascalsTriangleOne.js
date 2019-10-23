/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

URL: https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/1659/
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {    
    // recursive solution
    // but will exceed the memory limit due to recursion
    /*
    if(numRows === 2){
        return [[1],[1,1]];
    }

    let temp = generate(numRows-1);
    let i = temp.length-1; // 2
    let j = temp[temp.length-1].length-1; // 2
    let row = [1];
    while(i > 0 && j > 0){
        row.unshift(temp[i][j-1] + temp[i][j]); // 1 3 3 1
        j--;
    }
    row.unshift(1);
    temp.push(row);
    return temp;
    */
    
    // iterative solution
    if(!numRows) return [];
    
    let triangle = [];
    for(let i = 0; i < numRows; i++){
        triangle[i] = new Array(i+1);
        triangle[i][0] = triangle[i][i] = 1;

        for(let j = 1; j < i; j++){
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
        }
    }
    return triangle;
    
};
