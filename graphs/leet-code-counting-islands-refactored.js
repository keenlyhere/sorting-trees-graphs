function numIslands(grid) {

    const visited = new Set();
    const queue = [];
    let count = 0;

    for (row = 0; row < grid.length; row++) {
        for (col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === "1") {
                let start = [row, col];
                queue.push(start);
                visited.add(start.toString());


                while (queue.length) {
                    let node = queue.shift();
                    let currVal = grid[node[0]][node[1]];

                    if (currVal === "0") {
                        return;
                    }

                    let neighbors = getNeighbors(node[0], node[1], grid);
                    for (let neighbor of neighbors) {
                        if (!visited.has(neighbor.toString())) {
                            visited.add(neighbor.toString());
                            queue.push(neighbor);
                        }
                    }
                }

                count++;


            }
        }
    }

    return count;
}

function getIsland(row, col, matrix, visited) {
    let start = [row, col];
    let queue = [start];
    visited.add(start.toString());

    while (queue.length) {
        let coord = queue.shift();

        let neighbors = getNeighbors(coord[0], coord[1], matrix);
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor.toString())) {
                visited.add(neighbor.toString());
                queue.push()
            }
        }
    }
}

function getNeighbors(row, col, matrix, visited) {
    const neighbors = [
      [row - 1, col],  // top
      [row + 1, col],  // bot
      [row, col - 1],  // left
      [row, col + 1],  // right
    //   [row - 1, col + 1],  // top right
    //   [row - 1, col - 1],  // top left
    //   [row + 1, col + 1],  // bot right
    //   [row + 1, col - 1],  // bot left
    ]
    const validNeighbors = neighbors.filter((currentNode) => {
      const [row, col] = currentNode;
      return matrix[row] && matrix[row][col] === "1";
    })

    for (let validNeighbor of validNeighbors) {
        if (!visited.has(validNeighbor.toString())) {
            visited.add(validNeighbor.toString());
        }
    }
    return true;
  }

const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
//  Output: 1

console.log(numIslands(grid1))

const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
//   Output: 3

console.log(numIslands(grid2))
