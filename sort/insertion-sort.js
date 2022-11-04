// divide into sorted and unsorted
// pick and remove value from unsorted
// insert into correct place in sorted
// repeat until unsorted is empty and sorted is full

// example:
// [3, 2, 0, 4, 1]

// good on small n/nearly sorted data
const insertion = (array) => {

    // for (let i = 1; i < array.length; i++) {
    //     console.log(array.join(","));
    //     const curr = array[i];

    //     for (var j = i - 1; j >= 0; j--) {
    //         array[j + 1] = array[j];
    //     }

    //     array[j + 1] = curr;
    // }

    // return array;
    // insertion in place
    for (let i = 1; i < array.length; i++) {
        console.log(array.join(","));

        for (let j = i; j >= 0; j--) {
            if (array[j] < array[j - 1]) {
                swap(array, j, j - 1);
            }
        }
    }

    return array;
}

const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
    return array;
}

console.log(insertion([3, 2, 0, 4, 1]))
// best: O(n)
// avg: O(n^2)  in-place, out-of-place
// worst: O(n^2)
// in-place space: O(1)
// out-of-place space: O(n)
