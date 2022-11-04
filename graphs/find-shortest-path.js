adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function findAShortest(start, target) {
    // 1. Create a queue. Create a separate array containing the starting node.
    // Enqueue this array. The enqueued array is the current path.
    const queue = [[start]];
    // 2. Create a set to store visited nodes
    const visited = new Set();
    visited.add(start);
    // 3. While the queue is not empty, repeat steps 4-6
    while (queue.length) {
        // 4. Dequeue the first path, and save it in a variable
        let currentPath = queue.shift();
        // 5. Save the last node in the path in a variable (DO NOT pop it)
        let last = currentPath[currentPath.length - 1];
        // 6. IS THIS NODE THE THING? If so, stop and return a result. Else, continue.
        if (last === target) {
            return currentPath;
        }

        // 7. For each unvisited neighbor of the last node:
        adjList[last].forEach((neighbor) => {
            // a. Add it to the visited nodes set
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                // b. Copy the saved path, and add the neighbor to the end. Enqueue this new path
                let currentPathCopy = [...currentPath];
                currentPathCopy.push(neighbor);
                queue.push(currentPathCopy);
            }
        })
    }
    // 8. If the queue has become empty without finding the thing, then the thing has not been found.
    // Return false, an error, or a message as appropriate for the problem you are solving.
    return false;
}

console.log("First Test:")
console.log(findAShortest(1, 4))
