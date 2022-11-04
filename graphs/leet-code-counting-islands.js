// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
// return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.

// node = [row, col]
// up [(row - 1), col]
// iterate through every row/col
// check if current position is land, if not continue
    // if it is land, mark as visited and
    // traverse through neighbors > mark as visited
    // increment count by 1 after finishing island

function getNeighbors(row, col, grid, visited) {
    const rowInBounds = 0 <= row && row < grid.length;
    const colInBounds = 0 <= col && col < grid.length;

    if (!rowInBounds || !colInBounds) return false;

    if (grid[row][col] === "0") return false;

    const coord = row + "," + col;

    if (visited.has(coord)) return false;
    visited.add(coord);

    getNeighbors(row - 1, col, grid, visited);
    getNeighbors(row + 1, col, grid, visited);
    getNeighbors(row, col - 1, grid, visited);
    getNeighbors(row, col + 1, grid, visited);

    return true;
}

function numIslands(grid) {
    const visited = new Set();

    let count = 0;

    for (row = 0; row < grid.length; row++) {
        for (col = 0; col < grid[0].length; col++) {
            if (getNeighbors(row, col, grid, visited) === true) {
                count++;
            }
        }
    }

    return count;

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
