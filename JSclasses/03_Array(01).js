// let arr = [1, 2, 3, 4, 5];
// let lengthOfArr = arr.length;

// console.log(lengthOfArr);

// let arr = ['Joy', 'Happy', 'Sad', 1, 3, 5];

// let x = arr.length;
// console.log(x);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// //push - adds elements to the end of the array ALSO it returns the new length of the array

// let x = arr.push(9, 10, 11, 12, 13, 14, 15);
// console.log(x);

// let fruits = ['apple', 'banana', 'orange'];
// console.log(fruits) // length = 3

// let y = fruits.push('strawberry');

// console.log(fruits);//apple, banana, orange, strawberry
// console.log(y);// 4

// let arr = [1, 2, 3, 'hi', 'bye']; //array

// // console.log(arr.push('hey'));//
// let a = arr.push('hey', 'last', 'thing');
// console.log(a);// 8
// console.log(arr); //

// function myPush(arr) {
//     // newArr some operations to push the values inside the original Array
//     return newArr.length;
// }
// let obj = {
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3
// }

// console.log(obj.length)

//pop
// let arr = [1, 2, 3, 4, 5];

// let x = arr.pop();

// console.log(x);
// console.log(arr);

// let fruits = ['apple', 'banana', 'orange', 'kiwi'];

// fruits.pop();
// console.log(fruits)
// console.log(fruits.pop())
// console.log(fruits)
// console.log(fruits.push('strawberry'))
// console.log(fruits.push('melon'))
// console.log(fruits)

// console.log(fruits.shift());
// console.log(fruits);

// let x = fruits.unshift('one')
// console.log(x);

// console.log(fruits);

//----------->SLICE

// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes']

// // let result = fruits.slice(1, 5);
// // let result = fruits.slice(4);
// // let result = fruits.slice(1, -2);
// // let result = fruits.slice(-3);

// console.log(fruits.push('strawberry', 'papaya', 'pear')); //10
// console.log(fruits.pop()); //pear
// console.log(fruits.shift()); //apple
// console.log(fruits.unshift('jackfruit'))//9
// let result = fruits.slice(0, 3);
// console.log(result); // jackfruit,banana, orange

//---------------Some and every method

// let arr = [1, 2, 3, 4, 5, 6];

// let func = (item) => {
//     if (item % 2 == 0) {            // element % 2 --> true, false
//         return true
//     }
// }

// let result1 = arr.some((element) => {
//     return element % 2 == 0
// })

// let result1 = arr.some(func) //callback function
// console.log(result1);

// let callBack = item => item > 3
// let result2 = arr.some(callBack);
// console.log(result2);

// console.log(arr.some(item => item > 3))

//-----------EVERY - returns true when EVERY element of the array satisfies the condition
// let arr = [2, 4, 6, 8];
// let result = arr.every(item => item % 2 == 0)
// console.log(result);

// let arr = [1, 2, 3, 4, 5, 6]

// console.log(arr.some(y => y < 2))// true
// console.log(arr.every(y => y < 6)) // true


