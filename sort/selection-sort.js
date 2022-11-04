// set pointer at zero
// divide array into sorted and unsorted halves
// repeat while unsorted half is not empty
// find index of the min value in unsorted half
// save min value
// shift every unsorted val to the left of the min val to the right
// put min val at the divider
// increment divider and repeat

const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
    return array;
}

const selectionSort = (array) => {
    // let divider = 0;

    // for (let i = 0; i < array.length; i++) {
    //     let min = i;

    //     for (let j = i + 1; j < array.length; j++) {
    //         if (array[min] > array[j]) {
    //             min = j;
    //         }

    //     }

    //     swap(array, i, min);

    // }

    // return array;

    let divider = 0;

    while (divider < array.length) {

        console.log(array.join(","));

        let min = divider;

        for (let i = divider + 1; i < array.length; i++) {
            if (array[i] < array[min]) {
                min = i;
            }
        }

        let minValue = array[min];

        for (let i = min; i > divider; i--) {
            array[i] = array[i - 1];
        }

        array[divider] = minValue;
        divider++;
    }

    return array;

}


console.log(selectionSort([3, 2, 0, 4, 1]))  // [0, 1, 2, 3, 4]
// best: O(n^2)
// avg: O(n^2)  in-place, out-of-place
// worst: O(n^2)
// in-place space: O(1)
// out-of-place space: O(n)
