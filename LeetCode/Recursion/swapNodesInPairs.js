/*
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example:
Given 1->2->3->4, you should return the list as 2->1->4->3.

URL: https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1681/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let temp = head.next;
    head.next = temp.next;
    temp.next = head;
    head.next = swapPairs(head.next);
    
    return temp;
};
