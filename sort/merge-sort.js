function mergesort(arr) {

    // Check if the input is length 1 or less
    if (arr.length <= 1) {
        return arr;
    }
      // If so, it's already sorted: return

    // Divide the array in half
    let half = Math.floor(arr.length / 2);
    let leftHalf = arr.slice(0, half);
    let rightHalf = arr.slice(half);

    // Recursively sort the left half
    let sortedLeft = mergesort(leftHalf);
    // Recursively sort the right half
    let sortedRight = mergesort(rightHalf)

    // Merge the halves together and return
    return merge(sortedLeft, sortedRight)
  }

  // Takes in two sorted arrays and returns them merged into one
  function merge(arrA, arrB) {

    // Create an empty return array
    let merged = [];

    // Point to the first value of each array

    // While there are still values in each array...
    while (arrA.length || arrB.length) {
        let ele1 = arrA.length ? arrA[0] : Infinity;

        let ele2 = arrB.length ? arrB[0] : Infinity;

        let next;
        // Compare the first values of each array
        if (ele1 < ele2) {
            next = arrA.shift();
        } else {
            next = arrB.shift();
        }

        // Add the smaller value to the return array
        merged.push(next);
    }
      // Move the pointer to the next value in that array

    // Return the merged array
    return merged;
  }


  console.log(mergesort([7,1,3,10,2,7]))
