function depthFirstTraversal(root) {
    // put starting node on a stack
    const stack = [];
    stack.push(root);

    // while stack is not empty
    while (stack.length > 0) {
        // pop a node and print it
        let node = stack.pop();
        console.log(node.value);

        // put all of the node's children on top of the stack
        // travel all the way bottom left, then right
        // good for puzzle problems
        stack.push(node.right);
        stack.push(node.left);
    }
}
// space: O(n), n = height
// uses less memory than BFT w larger n
