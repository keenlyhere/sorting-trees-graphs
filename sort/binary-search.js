function binarySearch(arr, target) {    // time complexity: O(logn)  space complexity: O(1)

    // Set integers pointing to the high and low range of possible indices

    // While high and low indices do not overlap...
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        // Find the midpoint between high and low indices
        let mid = Math.floor((high + low) / 2);

        // Compare the target value to the midpoint value

        // If the target equals the midpoint...
            // Return the midpoint index
            if (target === arr[mid]) {
                return mid;
            }

        // If the target is higher than the midpoint...
            // Move the low pointer to midpoint + 1
            if (target > arr[mid]) {
                low = mid + 1;
            }

        // If the target is less than the midpoint...
            // Move the high pointer to midpoint - 1
            if (target < arr[mid]) {
                high = mid - 1;
            }
    }


    // Return -1 if the loop exits with overlapping pointers
    return -1;

  }


let arr = [1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52,
    53, 57, 63, 66, 67, 68, 69, 74, 76, 79,
    82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100];
let target = 89;

console.log(binarySearch(arr, target))
