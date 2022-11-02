const arr1 = [0, 1, 2, 3, 4, 5];
const arr2 = [0, 1, 2, 3, 4, 5];

for (let i = 1; i < arr1.length; i++) {
    arr1[i] = arr1[i - 1];
}

console.log(arr1);  // [ 0, 0, 0, 0, 0, 0 ]

for (let i = arr2.length - 1; i > 0; i--) {
    arr2[i] = arr2[i - 1];
}

console.log(arr2); // [ 0, 0, 1, 2, 3, 4 ]
