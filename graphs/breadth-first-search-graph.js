adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, target) {
    // Create a queue and enqueue the starting node
    const queue = [start];
    // Create a set to store visited nodes
    const visited = new Set();
    // While the queue is not empty, repeat steps 4-6
    while (queue.length) {
        // 4. Dequeue the first node
        let node = queue.shift()
        // 5. IS THIS NODE THE THING? If so, stop and return a result. Else, continue.
        if (node === target) {
            return true;
        }
        // 6. For each unvisited neighbor, add it to the visited nodes and to the back of the queue
        adjList[node].forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        })
    }
    // 6. If the queue has become empty without finding the thing,
    // then the thing has not been found. Return false, an error,
    // or a message as appropriate for the problem you are solving.
    return false;
}


console.log("First Test:")
console.log(breadthFirstSearch(4, 1))
