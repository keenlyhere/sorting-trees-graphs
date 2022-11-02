const arr = [0, 1, 2, 3, 4, 5, 6];

let tmp = arr[1];
arr[1] = arr[2];
arr[2] = tmp;

console.log(arr);  // [0, 2, 1, 3, 4, 5, 6]

[arr[4], arr[6]] = [arr[6], arr[4]];

console.log(arr);  // [0, 2, 1, 3, 6, 5, 4]

