//-------clone objects

// let user = {
//     name1: 'rahul',
//     age: 25,
//     id: 1,
//     phone: 12321312,
//     city: 'hyderabad'
// }

// let clone = {} //entirely new object reference


// 1. looping method
// for (let key in user) {
//     clone[key] = user[key]
// }

// console.log(clone);

// console.log(clone == user)

// 2. Object.assign(destination, source)

// Object.assign(clone, user);
// console.log(clone);

// let clone = Object.assign({}, user);
// console.log(clone)


// -------spread operator ...

// function sum(a, b, c) {
//     console.log(a + b + c);
// }

// let arr = [1, 2, 3, 4]

// sum(...arr); // sum (1, 2, 3)

// let arr1 = [1, 2, 3]
// let arr2 = [...arr1]; //arr2 = [1, 2, 3] //entirely new reference, spreading out values
// let arr2 = arr1;
// console.log(arr1 == arr2);
// arr2.push(4)
// console.log(arr2);
// console.log(arr1);
// arr2.push(...arr1)
// console.log(arr2, 'arr2');

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]

// arr1 = arr1.concat(arr2)

// console.log(arr1)

// arr1 = [...arr1, ...arr2]
// console.log(arr1);

// let halfMarks = {
//     math: 20,
//     science: 10,
//     history: 15,
//     geography: 25
// }

// let fullMarks = {}
// // make an object fullMarks which has double the marks values and then console the total sum in fullmarks

// // 1. make the fullmarks object
// // 2. fill it with double values of halfMarks
// // 3. print the sum inside fullmarks

//------method1
// for (key in halfMarks) {
//     fullMarks[key] = halfMarks[key] * 2;
// }

// console.log(fullMarks)

// let sum = 0
// for (key in fullMarks) {
//     sum += fullMarks[key];
// }
// console.log(sum)

//-----method 2
// let fullMarks = { ...halfMarks } // just cloned
// let sum = 0
// for (key in fullMarks) {
//     fullMarks[key] = fullMarks[key] * 2
//     sum += fullMarks[key]
// }

// console.log(sum)

// let obj1 = {
//     user: 'rahul',
//     id: 0
// }

// let obj2 = {
//     user: 'shruti',
//     id: 1
// }

// let obj3 = { ...obj1, ...obj2 }

// console.log(obj3);

//-------- This keyword

// function sayHi() {
//     console.log('hi!')
// }

// //functionDefinition(some variable has this) ().
// sayHi()

// let user = {
//     name1: 'rahul',
//     sayHi: function () {
//         console.log('hi!')
//     }
// }

// console.log(user.sayHi);

// user.sayHi();


// let user = {
//     name1: 'rahul',
//     id: 2,
//     sayHi: function () {
//         console.log('hi!', user.name1, user.id)
//     }
// }

// let user = {
//     name1: 'rahul',
//     id: 2,
//     sayHi: function () {
//         console.log(this, '******')
//         // console.log('hi!', this.name1, this.id)
//     }
// }

// let admin = user; //reference of obj passed to admin
// user = null; //user lost its reference to the object, because we reassigned user.
// // admin.sayHi();
// // console.log(user)
// // console.log(admin) //admin still has the reference to the object

// admin.sayHi(); //null.name1 ERROR!



// a = 5;
// b = a;
// a = 2;
// console.log(a, b);