function recursiveSort(arr) {       // O(n^2)
    // base case
    if (arr.length <= 1) return arr;

    // find and remove the largest value in the array
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {  // O(n)
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    const maxValue = arr[maxIndex];
    arr.splice(maxIndex, 1);  // O(n)

    // sort the remaining elements
    // console.log("recurse", arr)
    arr = recursiveSort(arr);  // O(n)

    // put the largest value back at the end of the array
    arr.push(maxValue);

    return arr;

}

console.log(recursiveSort([3, 2, 0, 4, 1]))
