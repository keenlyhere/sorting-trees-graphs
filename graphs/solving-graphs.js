// Given an object representing friendships in a social network,
// write a function socialConnections that takes in a name and
// an integer degrees and returns a list of all users within the degrees of friendship from the given name.

function socialConnections(name, degrees, graph) {
    // create new queue and enqueue a path to the starting node;
    const queue = [[name]];

    // create a set to store visited nodes
    let visited = new Set();

    const friends = [];

    // while queue not empty
    while (queue.length) {
        // dequeue first path
        let path = queue.shift();

        // grab last node from path;
        let currentNode = path[path.length - 1];

        // check if that path has been visited
        if (!visited.has(currentNode)) {
            // if not, mark as visited
            visited.add(currentNode);

            // add to friends array if path is within the number of degrees
            if (path.length > 1 && path.length <= degrees + 1) {
                friends.push(currentNode);
            }
            // put paths to all its neighbors in back of queue
            let neighbors = getNeighbors(currentNode, graph);
            for (let i = 0; i < neighbors.length; i++) {
                let pathCopy = [...path];
                pathCopy.push(neighbors[i]);
                queue.push(pathCopy);
            }
        }
    }

    return friends;
}

function getNeighbors(node, graph) {
    return graph[node];
}

friendships = {
    'Alice': ['Bob', 'Frank'],
    'Bob': ['Alice', 'Charlie', 'Geraldine'],
    'Charlie': ['David', 'Bob'],
    'David': ['Charlie', 'Frank'],
    'Eve': [],
    'Frank': ['Alice', 'Charlie'],
    'Geraldine': ['Bob']
}

socialConnections('Alice', 1, friendships);
// ['Bob', 'Frank']

socialConnections('Alice', 2, friendships);
// ['Bob', 'Frank', 'Charlie', 'Geraldine']
