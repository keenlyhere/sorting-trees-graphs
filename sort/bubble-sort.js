// iterate through array
// if curr > next num, swap
// if end of array and no swaps, return
// else, repeat from beginning

// example:
// [3, 2, 0, 4, 1]

const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
    return array;
}

const bubbleSort = (array) => {

    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                // swap(array, i, i + 1)
                swapped = true;
            }

        }
    }

    return array;
};

console.log(bubbleSort([3, 2, 0, 4, 1]));  // [0,1,2,3,4]
// best: O(n) => only on sorted arrays, in-place
// avg: O(n^2)
// worst: O(n^2) out-of-place
// space: O(1) in-place, out-of-place
