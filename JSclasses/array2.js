// let arr = ['1', '2', '3', '4'];

// ----------includes() ------- returns boolean

// console.log(arr.includes(3));


// --------indexof() ------- returns first index of the element if found, returns -1 if element not found.
// let arr = [1, 2, 5, 3, 4, 5, 6, '5']
// console.log(arr.indexOf(5));

//-------lastIndexof()----- returns last index where the element is found, returns -1 if element is not found.

// console.log(arr.lastIndexOf(5));



// -------- findIndex() ---- first index of the element which satisfies the condition
// console.log(arr.findIndex(function (element) {
//     if (element > 4) {
//         return true
//     }
// }))

// function testingFunc(item) {
//     return item > 4;
// }

// console.log(arr.findIndex(testingFunc));

// console.log(arr.findIndex((item) => {
//     if (item > 4) {
//         return true;
//     }
// }))

// console.log(arr.findIndex(item => item > 4))


// -----------concat
// concat method returns a NEW ARRAY, it does not modify the original arrays.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = arr1.concat(arr2);

// console.log(arr3);

// toString() - returns the array as a string

// let arr = [1, 2, 3, 'hello']
// console.log(arr.toString());

// JOIN ------

// let newStr = arr.join();
// let newStr = arr.join('');
// let newStr = arr.join(' ');
// let newStr = arr.join('-');
// console.log(newStr)

// -----FILTER --returns new array with the elements that satisfy the callback function's condition
//filter method takes in a function as an argument.

// function isEven(num) {
//     return num % 2 === 0;
// }//returns true if num is even

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let newArr = arr.filter(function (num) {
//     return num % 2 === 0
// }); // callback function

// let newArr = arr.filter(element => element % 2 === 0)

// let newArr = arr.filter(function (num) {
//     return num % 2 === 0;
// })

// console.log(newArr); // 2,4,6,8




// FOREACH
// function printDouble(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] * 2)
//     }
// }
// printDouble(arr)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.forEach(function (item) {
//     console.log(item * 2)
// })

// arr.forEach(item => console.log(item * 2))
// let newArr = [];
// arr.forEach(item => newArr.push(item * 2));
// console.log(newArr);

// MAP method -returns a new array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let newArr = arr.map(item => item * 2);
// let newArr = arr.map(function (item) {
//     return item * 2;
// })
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let sqrArr = []

// arr.forEach(item => sqrArr.push(item * item));
// console.log(sqrArr);

// let sqrArr = arr.map(item => item * 10);
// console.log(sqrArr);
// console.log(arr);

// -----------------REDUCE

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function findSum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum;
// }
// console.log(findSum(arr));
// let sum = 0
// arr.forEach(num => {
//     sum = sum + num
// })
// console.log(sum);

// returns a value
// let initialValue = 0
// let output = arr.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// }, initialValue)

// console.log(output)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// //find sum of all elements
// let output = arr.reduce(function (acc, item) {
//     acc += item
//     return acc
// }, 0)

// console.log(output);

// let arr = [6, 7, 1, 3, 4, 8, 10, 0];

// function findMax(arr) {
//     let max = -1    //start with the lowest value
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));

// let maxElement = arr.reduce(function (max, item) {
//     if (item > max) {
//         max = item
//     }
//     return max
// }, -1);

// console.log(maxElement);

// let arr = [6, 7, 1, 3, 4, 8, 10, 0];

// let minElement = arr.reduce((min, item) => {
//     if (item < min) {
//         min = item
//     }
//     return min;
// }, 100)

// console.log(minElement);


let salary = [100, 200, 300, 400, 500, 600];
// filter out salaries greater than 300
// double the filtered salaries
// find out the total salary that needs to be paid.






