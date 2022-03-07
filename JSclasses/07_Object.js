// -----------OBJECTS - non-primitive

// let user = new Object();

// let user = {
//     name: 'Rahul', //property of the user object
//     id: 1,
//     callThis: function () {
//         console.log('Function inside object')
//     },
//     'eats fruits': true, //Can't use dot notation for accessing this key

// };

// console.log(user);

// Accessing the properties of the object.
// ----Dot notation

// console.log(user.name)
// console.log(user.id)
// console.log(user.callThis)

// -----square bracket notation
// user.age = 30
// user.name = 'Abishek'
// console.log(user)
// console.log(user['name'])
// console.log(user['age'])
// console.log(user['eats fruits'])

// let ef = 'eats fruits'
// let randomVar = 'age'

// console.log(user[randomVar]);

// let addressVar = "address"

// let user = {
//     [addressVar]: 'Mumbai'
// }

// console.log(user.address)
// console.log(user[addressVar])


// let firstName = 'Rahul';
// let age = 30;

// // let user = {
// //     firstName: firstName,
// //     age: age,
// //     id: 1
// // }

// // Shorthand notation
// let user = {
//     firstName, //same as firstName: firstName
//     age, //same as age: age
//     id: 1,
//     'eats fruits': 'yes'
// }

// console.log(user.firstName)
// console.log(user.age)

// check if you have a key in the object
// console.log(user.lastName) //undefined

// console.log('firstName' in user)
// console.log('lastName' in user)

// ----------Looping in the object

// let salaries = {
//     Rahul: 400,
//     Shubham: 300,
//     Arpit: 200,
//     Abishek: 500
// }

// for in loop, this loops the keys

// for (let key in salaries) {
//     // console.log(key)
//     console.log(salaries[key])
// }
// Rahul has the salary of 400

// for (let key in salaries) {
//     console.log(`${key} has the slary of ${salaries[key]}`);
// }

// write a function which returns sum of all salaries

// write a function which multiplies all values by 2


// function mult(salaries) {
//     for (let i in salaries) {
//         // salaries[i] = salaries[i] * 2
//         salaries[i] *= 2
//     }
// }

// mult(salaries)

// console.log(salaries)


// let salaries = {
//     Rahul: 800,
//     Shubham: 600,
//     Arpit: 400,
//     Abishek: 1000,
//     isManager: false,
//     position: 'swe',
//     rollNumber: '200'
// }

// let sum = 0
// console.log(typeof salaries.Rahul)
// for loop

// for (let key in salaries) {
//     if (typeof salaries[key] == 'number') // safeguarding what you want to add in sum
//         sum += salaries[key]
// }

// console.log(sum)


// .keys method and .values method which returns an array of the keys and values respectively

// let keysArray = Object.keys(salaries)
// let valueArray = Object.values(salaries)
// console.log(keysArray)
// console.log(valueArray)
// to these arrays you can apply all the array methods, forEach, map, filter, reduce

// filter salaries which are more than 400 - exercise.


// let name1 = 'Rahul';

// let name2 = 'Rahul';
// let name2 = name1;
// console.log(name1 == name2)

// let user1 = { firstName: 'shruti' }
// let user2 = { firstName: 'shruti' }

// let user1 = { firstName: 'shruti' } //user1 contains reference to this object
// let user2 = user1 //user2 will contain the same referece which is inside user1

// // console.log(user1 == user2)
// user1.lastName = 'verma'
// user2.lastName = 'gupta'

// console.log('user1 lastname =', user1.lastName)
// console.log('user2 lastname =', user2.lastName)








