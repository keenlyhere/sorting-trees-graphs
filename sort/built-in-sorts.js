// time complexity: O(nlogn)
// space complexity: O(1)

function compareNums(a, b) {
    // descending
    // return b - a

    // ascending
    return a - b;
}

// nums = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
// console.log(nums.sort(compareNums));

// funky sort oddEven

function oddEvenCompare(a, b) {
    if (a % 2 === 1 && b % 2 === 0) return 1;
    if (a % 2 === 0 && b % 2 === 1) return -1;
}

let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(nums.sort(oddEvenCompare))
// time complexity: O(nlogn)
// space complexity: O(1)

// funky sort zeroes

function moveZeroesCompare(a, b) {
    if (a === 0) return 1;
    if (b === 0) return -1;
    return a - b;
}

nums = [0, 1, 0, 4, 15];
console.log(nums.sort(moveZeroesCompare))

function alphabeticalOrder(array) {
    return array.sort();
}

function generalCompare(a, b) {
    // positive, sort b before a
    if (a > b) return 1;

    // 0 or negative, leave a and be in same order
    if (a < b) return -1;

    // a must be equal to be to return 0
    if (a === b) return 0;

}


// best: O(nlog(n))
// avg: O(nlog(n))
// worst: O(nlog(n))
// space: O(1)

// timsort
// best: O(n)
// avg: O(nlog(n))
// worst: O(nlog(n))
// space: O(1)
