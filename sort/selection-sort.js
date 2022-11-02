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
    let divider = 0;

    for (let i = 0; i < array.length; i++) {
        let min = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }

        }

        swap(array, i, min);

    }

    return array;

}


console.log(selectionSort([3, 2, 0, 4, 1]))  // [0, 1, 2, 3, 4]
