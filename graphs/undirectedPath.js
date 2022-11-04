// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
// The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

const undirectedPath = (edges, nodeA, nodeB) => {

    const adjList = makeAdjList(edges);
    const queue = [nodeA];
    const visited = new Set();
    visited.add(nodeA);

    while (queue.length) {
        let node = queue.shift();

        if (node === nodeB) {
            console.log(true);
            return true;
        }

        for (let neighbor of adjList[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    console.log(false)
    return false;
};

const makeAdjList = (edges) => {
    const adjList = {};

    for (let edge of edges) {
        const [a, b] = edge;
        if (!adjList[a]) {
            adjList[a] = [];
        }

        if (!adjList[b]) {
            adjList[b] = [];
        }

        adjList[a].push(b);
        adjList[b].push(a)
    }

    return adjList;
}


// examples:
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];

undirectedPath(edges, 'j', 'm'); // -> true
