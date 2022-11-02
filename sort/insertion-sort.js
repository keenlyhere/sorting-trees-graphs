// divide into sorted and unsorted
// pick and remove value from unsorted
// insert into correct place in sorted
// repeat until unsorted is empty and sorted is full

// example:
// [3, 2, 0, 4, 1]

const insertion = (array) => {

    for (let i = 1; i < array.length; i++) {
        const curr = array[i];

        for (var j = i - 1; j >= 0 && curr < array[j]; j--) {
            array[j + 1] = array[j];
        }

        array[j + 1] = curr;
    }

    return array;
}



console.log(insertion([3, 2, 0, 4, 1]))
