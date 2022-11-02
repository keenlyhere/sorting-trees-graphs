// function oddEvenCompare(a, b) {
//     if (a % 2 === 1 && b % 2 === 0) return -1;
//     if (a % 2 === 0 && b % 2 === 1) return 1;
// }

// function oddEvenSort(arr) {
//     arr.sort((a, b) => a - b)
//     return arr.sort(oddEvenCompare)
// }

// console.log(oddEvenSort([5, 8, 13, 6, 22, 14, 9]))

function compareLength(a, b) {

    if (a.toString().length > b.toString().length) return -1;
    if (b. toString().length > a.toString().length) return 1;
    return a - b;
}

function reverseBaseSort(arr) {

    return arr.sort(compareLength);
}


function frequencySort(arr) {

    let obj = {};

    for (let ele of arr) {
        if (obj[ele] === undefined) {
            obj[ele] = 1;
        } else {
            obj[ele]++;
        }
    }
    return arr.sort((a, b) => {
        if (obj[a] > obj[b]) return 1;
        if (obj[b] > obj[a]) return -1;
        return b - a;
    })

}


const arr1 = [11, 1, 101, 10, 100];
const arr2 = [1, 45, 164, 6, 31, 90, 671];
console.log(reverseBaseSort(arr1));  // [100, 101, 10, 11, 1]
console.log(reverseBaseSort(arr2));  // [164, 671, 31, 45, 90, 1, 6]

const arr3 = [1, 1, 2, 2, 2, 3];
console.log(frequencySort(arr3));  // [3, 1, 1, 2, 2, 2]

class Cat {
    constructor(name) {
      this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
  }

  let cat = new Cat("Meowser");

  class Dog {
    constructor(name) {
      this.name = name;
    }
  }

  let dog = new Dog("Fido");

  let sayNameFunc = cat.sayName;

  let sayHelloCat = sayNameFunc.bind(cat);
  sayHelloCat();

  let sayHelloDog = sayNameFunc.bind(dog);
  sayHelloDog();
