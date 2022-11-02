function quickSort(array) {

    if (array.length <= 1) {
        return array;
    }

    // choose value in array called "pivot"
    let pivot = array.shift();
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

console.log(quickSort([5, 4, 10, 1, 8, 3, 6]))  // avg O(nlogn), worst O(n^2) // avg O(nlogn), best O(1)
