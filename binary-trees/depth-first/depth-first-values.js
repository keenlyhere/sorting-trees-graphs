// structy problem
/*
    Write a function, depthFirstValues, that takes in the root of a binary tree.
    The function should return an array containing all values of the tree in depth-first order.

    const depthFirstValues = (root) => {
    // to do
    }
*/

// create Node class
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValues = (root) => {
    if (root === null) return [];
    const stack = [root]
    let print = [];

    while (stack.length) {
        const node = stack.pop();

        print.push(node.val);

        if (node.right !== null) {
            stack.push(node.right);
        }

        if (node.left !== null) {
            stack.push(node.left);
        }
    }

    console.log(print)
    return print;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// console.log(a)
depthFirstValues(a);
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
