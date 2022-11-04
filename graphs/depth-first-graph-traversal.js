const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printDepthFirst(start) {
    // Create a stack and push the starting node
    const stack = [start];
    // Create a set to store visited nodes, and add the starting node
    const visited = new Set();
    visited.add(start);

    // While the stack is not empty, repeat steps 4-6
    while (stack.length) {
        // 4. Pop the node on the top of the stack.
        let node = stack.pop();
        // DO THE THING THAT YOU NEED TO DO FOR THE POPPED NODE
        // 5. For example, add it to a running total, print it, or save it in an array
        console.log(node);
        if (!visited.has(node)) {
            visited.add(node);
        }
        // 6. For each unvisited neighbor,
        // add it to the visited nodes and to the top of the stack.
        for (let neighbor of adjList[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                stack.push(neighbor);
            }

        }

    }
}

console.log("First Test:")
printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
                    // One possible solution:  3, 4, 6, 5, 1, 2
console.log("Second Test:")
printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
                    // One possible solution:  6, 4, 5, 2, 1, 3
console.log("Third Test:")
printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
                    // One possible solution:  4, 6, 5, 2, 1, 3
