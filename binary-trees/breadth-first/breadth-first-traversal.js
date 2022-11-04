function breadthFirstTraversal(root) {
    // put starting node in queue
    const queue = new Queue();
    queue.enqueue(root);

    // while queue is not empty
    while (queue.size > 0) {
        // dequeue a node and print it
        let node = queue.dequeue();
        console.log(node.value);

        // put all of the node's children in the back of the queue
        queue.enqueue(node.left);
        queue.enqueue(node.right);
    }
}

// Space: O(n), n = max width
// visited: array - O(n), set - O(1)
// dequeue (array): O(n)
// dequeue (Queue): O(1)
function breadthFirstTraversalArray(root) {
    // put starting node in queue
    const queue = [];
    queue.push(root);

    // while queue is not empty
    while (queue.length > 0) {
        // dequeue a node and print it
        let node = queue.shift();
        console.log(node.value);

        // put all of the node's children in the back of the queue
        // checks all neighbors first, so bad for decision making trees
        // good for finding friends of friends
        queue.push(node.left);
        queue.push(node.right);
    }
}
