// console.log(2);
// console.log(4);
// ....

//for loop

// for(initialization; condition; updation(increment/decrement)){
//     // statements that you want to perform in EACH iteration.
// }
// table from 1st to 10th value
// i < 11, i <= 10
// for (var i = 1; i < 11; i++) {
//     console.log(2 * i);
// }

// var i = 1;
// for (; i < 11;) {
//     console.log(2 * i);
//     i++;
// }

// var student = { //keys are on the left side of ':' and values are on the right side.
//     firstName: 'Rahul',
//     lastName: 'Sharma',
//     id: 1
// }
// for (var key in student) {
//     //the statements to be perfomed on each iteration.
//     console.log('key is', key, 'value is', student[key]);
// }//firstName Rahul

// for of loop

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var element of arr) {
//     //print only even numbers.
//     if (element % 2 == 0)
//         console.log(element);
// }

// for(var i=0; i < arr.length; i+=2){
//     console.log(arr[i])
// }

// Nested loops
// for (var i = 1; i < 5; i++) {
//     for (var j = 1; j < 5; j++) {
//         console.log('i is', i, 'j is', j);
//     }
// }

// for (var i = 1; i < 5; i++) {
//     for (var j = 1; j < 4; j++) {
//         for (var k = 1; k < 3; k++) {
//             console.log('i =', i, 'j =', j, 'k =', k);
//         }
//     }
// }

// while loop
// initialization expression

// while(condition) {
//     //statements to be executed
//     // update the expression
// }

// var i = 1;

// while (i < 11) {
//     console.log(2 * i);
//     i++; //++i, i = i+1, i += 1
// }

// var i = 1;

// while (i < 5) {
//     // console.log(2 * i);
//     // i++;
//     if (i == 3) {
//         i++;
//         continue;
//     }
//     console.log(2 * i);
//     i++;
// }

// for (var i = 1; i < 5; i++) {
//     if (i == 3) {
//         // i++;
//         continue;
//     }
//     console.log(2 * i)
// }


//do-while Loop
// Your code gets executed AT LEAST one time.

// var i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i < 6)

// var i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i < 1)

// let i = 1;

// while (i < 5) {
//     i++;

//     if (i == 3) continue;

//     console.log(i)
// }
