const matrice = [
    [ 0, 1, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];

function getNeighbors(node, matrix) {
    // Create an array to hold the valid neighbors
    let neighbors = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 1) {
                // start local traversal
            }
        }
    }
}

// function getNeighbors(node, matrix) {
//     // Create an array to hold the valid neighbors
//     let neighbors = [];

//     // UP:
//         // Identify the node above the current node, if it exists
//         // Push that node into the new array
//         let up = node[1] - 1;
//         if (up >= 0 && up <= matrix.length - 1) {
//             neighbors.push([node[0], up]);
//         }

//     // DOWN:
//         // Identify the node below the current node, if it exists
//         // Push that node into the new array
//         let down = node[1] + 1
//         if (down >= 0 && down <= matrix.length - 1) {
//             neighbors.push([node[0], down]);
//         }

//     // LEFT:
//         // Identify the node to the left of the current node, if it exists
//         // Push that node into the new array
//         let left = node[0] - 1
//         if (left >= 0 && left <= matrix.length - 1) {
//             neighbors.push([left, node[1]]);
//         }

//     // RIGHT:
//         // Identify the node to the right of the current node, if it exists
//         // Push that node into the new array
//         let right = node[0] + 1
//         if (right >= 0 && right <= matrix.length - 1) {
//             neighbors.push([right, node[1]]);
//         }

//     // Return the neighbors array
//     console.log(neighbors);
//     return neighbors;
// }

// // returns the correct neighbors from an internal node

// getNeighbors([2,2], matrix) // returns [ [1,2], [3,2], [1,2], [3,2] ]

// // returns the correct neighbors from a corner node
// getNeighbors([0,0], matrix) // returns [ [1,0], [0,1] ]

// // returns the correct neighbors from an edge node
getNeighbors([2,3], matrice) // returns [ [1,0], [3,0], [2,1] ]


// Example traversal function stub
function traverseMatrix(matrix, startNode) {
    // 1. Create a queue and enqueue the starting node
    const queue = [startNode];

    // 2. Create a set to store visited nodes
    const visited = new Set();

    const print = [];

    // 3. While the queue is not empty, repeat steps 4-6
    while (queue.length) {
        // 4. Dequeue the first node and check if it's been visited
        let node = queue.shift();

        print.push(node);
        // 5. If not, mark it as visited and DO THE THING
        if (!visited.has(node.toString())) {
            visited.add(node.toString());
        }

        let neighbors = getNeighbors(node, matrix);
        neighbors.forEach((neighbor) => {
            if (!visited.has(neighbor.toString())) {
                visited.add(neighbor.toString());
                // 6. Put all its neighbors in the back of the queue
                queue.push(neighbor);
            }
        })
    }
    return console.log(print);
}

// traverseMatrix(matrice, [2,2])

//Example search function stub
function searchMatrix(matrix, startNode, thingYouSearchFor) {
    const queue = [startNode];
    const visited = new Set();

    while (queue.length) {
        let node = queue.shift();

        if (node.toString() === thingYouSearchFor.toString()) {
            return true;
        }

        if (!visited.has(node.toString())) {
            visited.add(node.toString());
        }

        let neighbors = getNeighbors(node, matrix);
        neighbors.forEach((neighbor) => {
            if (!visited.has(neighbor.toString())) {
                visited.add(neighbor.toString());
                queue.push(neighbor);
            }
        })
    }

    return false;

    // The thingYouSearchFor might represent an end node, a value in the matrix,
    // or some sort of condition that would need to be met to end the search
}
console.log(searchMatrix(matrice, [2,2], [2,4]))
