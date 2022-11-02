function evenOddSort(nums) {
    // create empty arrays for evens and odds
    const evens = [];
    const odds = [];

    // find smallest even and odds in array
    // remove smallest even and odd values from array
    while (nums.length > 0) {
        let smallestEven = Infinity;
        let smallestOdd = Infinity;
        for (let i = 0; i < nums.length; i++) {
            // even
            if (nums[i] % 2 === 0) {
                if (nums[i] < smallestEven) {
                    smallestEven = nums[i];
                }
            }

            // odd
            else if (nums[i] % 2 === 1) {
                if (nums[i] < smallestOdd) {
                    smallestOdd = nums[i];
                }
            }
        }

        // add to end of even and odd arrays
        if (smallestEven !== Infinity) {
            evens.push(smallestEven);

            // remove smallest even value from array
            let smallestEvenIndex = nums.indexOf(smallestEven);
            nums.splice(smallestEvenIndex, 1);
        }

        if (smallestOdd !== Infinity) {
            odds.push(smallestOdd);

            // remove smallest odd value from array
            let smallestOddIndex = nums.indexOf(smallestOdd);
            nums.splice(smallestOddIndex, 1);
        }
    }

    // return joined even and odd arrays
    return [...evens, ...odds]
}

console.log(evenOddSort([9, 8, 7, 6, 5, 4, 3, 2, 1]))  // [2, 4, 6, 8, 1, 3, 5, 7, 9]
