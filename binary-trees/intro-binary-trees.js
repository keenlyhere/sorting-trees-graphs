// represent a node with class
class Node {
    constructor(val) {  // initial value stored within the node
        this.val = val;
        // by default, a node will have no left or right child
        this.left = null;
        this.right = null;
    }
}

// create nodes
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

// connect nodes together
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/*

        a
       / \
      b   c
     / \   \
    d   e   f

*/
