function moveZeroes(nums) {
    // create pointer that points to the left-most zero in the array
    let firstZero = -1; // -1 = no zeroes encountered yet

    // iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // if no zeroes yet, continue until find a zero
        if (firstZero === -1) {
            // when reach first zero, set firstZero to current i;
            if (nums[i] === 0) {
                firstZero = i;
            }
        }

        // when reach non-zero value
        else if (nums[i] !== 0) {
            // swap its position with firstZero
            [nums[i], nums[firstZero]] = [nums[firstZero], nums[i]];
            // increment firstZero
            firstZero++;
        }
    }

    return nums;
}
