// function abc() {
//     console.log('Inside abc')
// }

// abc() // invoke the function

// function add(a, b) { //parameters
//     console.log(a + b);
// }

// add(4, 5) //arguments

// function add(a, b) {
//     return a + b;
// }

// let c = add(4, 4);
// console.log(c);

// f1(); //normal function
// // f2(); // anonymous function
// // f3(); // arrow function
// function f1() {
//     console.log('Normal function');
// }

// var f2 = function () {
//     console.log('Anonymous function');
// }

// var f3 = () => { //Arrow functions were introduced in ES6
//     console.log('Arrow function');
// }
// // f1(); //normal function
// f2(); // anonymous function
// f3(); // arrow function


// function abc() {
//     console.log('abc')
// }

// var abc = () => {
//     console.log('abc')
// }

// var x = 10; // global scope


// var x = 10;
// function a() {
//     var y = 20;
//     function b() {
//         console.log(x, y);
//     }
//     b();
// }
// a();

// var x = 10;
// function a() {
//     console.log(x);
// }
// a();


// var x = 30;

// function a() {
//     var x = 40;
//     console.log(x);
// }

// a();
// var x = 10
// function add(a, b) {
//     a++;//4->5
//     console.log(a + b + x);
// }
// x++;
// add(4, 5);//9, 20, 10, 21
// x++;
// add(4, 5);//9, 21, 10, 22
// x++;
// add(4, 5);//9, 22, 10, 23


// function add(a, b) { //parameters
//     return a + b;
// }

// const add = (a, b) => {
//     return a + b;
// }

// const multiplyBy2 = (num) => {
//     return num * 2;
// }

// const add = (a, b) => a + b //implicit return
const multiplyBy2 = num => num * 2 // remove paranthesis if ONLY one parameter present.

// let output = add(4, 5) //arguments
let output2 = multiplyBy2(3)
console.log(output2); //

// console.log(output)




