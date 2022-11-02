// Adjacency List - represents relationships as an object data type
const adjacencyList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4],
};
      // Node 1 has two neighbor nodes [2, 5]

// Matrix - represents relationships as a two-dimensional (2-D) array data type
// const matrix = [
//       [ 0, 1, 0, 0, 1 ],
//       [ 1, 0, 0, 0, 1 ],
//       [ 1, 1, 0, 1, 1 ],
//       [ 0, 1, 1, 0, 0 ],
//       [ 0, 0, 0, 0, 0 ]
// ];
      // The [0,0] node has three neighbor nodes [ [0,1], [1,0], [1,1] ],
      // if we are counting diagonals as valid neighbors


const matrix = [
    [ 0, 1, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];

function getNeighbors(node, matrix) {
    // Create an array to hold the valid neighbors

    // UP:
        // Identify the node above the current node, if it exists
        // Push that node into the new array

    // DOWN:
        // Identify the node below the current node, if it exists
        // Push that node into the new array

    // LEFT:
        // Identify the node to the left of the current node, if it exists
        // Push that node into the new array

    // RIGHT:
        // Identify the node to the right of the current node, if it exists
        // Push that node into the new array

    // Return the neighbors array
    }

// returns the correct neighbors from an internal node
getNeighbors([2,2], matrix) // returns [ [1,2], [3,2], [1,2], [3,2] ]

// returns the correct neighbors from a corner node
getNeighbors([0,0], matrix) // returns [ [1,0], [0,1] ]

// returns the correct neighbors from an edge node
getNeighbors([2,0], matrix) // returns [ [1,0], [3,0], [2,1] ]
