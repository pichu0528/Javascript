/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:
Input: 3
Output: [1,3,3,1]

URL: https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/1660/
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(!rowIndex) return [1];
    let triangle = [];
    
    // building the pascal's triangle
    for(let i = 0; i <= rowIndex; i++){
        triangle[i] = new Array(i+1);
        triangle[i][0] = triangle[i][i] = 1;
        for(let j = 1; j < i; j++){
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
        }
    }
    return triangle[rowIndex];
};
