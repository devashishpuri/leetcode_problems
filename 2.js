/**
 * Definition for singly-linked list.
*/
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let resultLinkedList;
    let resultLinkedLastNode;
    while (true) {
        // breakLoop = l1.next == null && l2.next == null;

        let sum = 0;
        let val = 0;
        if (l1) {
            sum += l1.val;
            l1 = l1.next != null ? l1.next : undefined;
        } else {
            sum += 0;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next != null ? l2.next : undefined;
        } else {
            sum += 0;
        }

        // Add carry
        sum += carry
        carry = 0;

        // check sum should be 1 digit
        if (sum >= 10) {
            val = ((sum) / 10 - 1) * 10;
            carry = 1;
        } else {
            val = sum;
        }

        let newNode = new ListNode(val, null);
        if (resultLinkedList) {
            resultLinkedLastNode.next = newNode;
        } else {
            resultLinkedList = newNode;
        }
        resultLinkedLastNode = newNode;

        if (l1 == undefined && l2 == undefined) {
            break;
        }

    }

    if (carry != 0) {
        resultLinkedLastNode.next = new ListNode(carry, null);
    }

    return resultLinkedList;
};

l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null)))))));
l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))));

addTwoNumbers(l1, l2)
