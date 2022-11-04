// divide and conquer
function quickSort(array) {

    // check if input is length 1 or less
    // if so, already sorted: return
    if (array.length <= 1) {
        return array;
    }

    // choose value in array called "pivot"
    let pivot = array[0];
    // partition array so values smaller than pivot are on left
    let left = array.filter((ele) => ele < pivot);
    // larger on right
    let right = array.filter((ele) => ele >= pivot);
    // sort left and right partitions
    let leftSort = quickSort(left);
    let rightSort = quickSort(right);
    // return array with left, pivot, and right values
    return [...leftSort, pivot, ...rightSort];

}

console.log(quickSort([5, 4, 10, 1, 8, 3, 6]))










// best: O(nlog(n))
// avg: O(nlog(n))
// worst: O(n^2) => if pivot point chosen is greatest or smallest ele, or when arr already sorted in inc or dec order
// time complex of quicksort depends on organization of data within the input array
// in-place space: O(log(n))
// out-of-place space: O(nlog(n))
