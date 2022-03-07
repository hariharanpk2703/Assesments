// -------MAPS and SETS

// in objects keys are limited to strings
// let obj = {
//     name1: 'darshit',
//     lastName: 'singh',
// }

// maps are just like objects but the key inside map can be of any type

// how to create a new map ?

// let nameMap = new Map() // Map constructor

// console.log(nameMap);

// access the size/length of the map
// console.log(nameMap.size);

// map accepts key value pairs, the key can be of any type

// add key value pairs to the map
// set function/method

// 2 arguments - key, value

// let variableName = 'name1';
// let key2 = 'name2';
// let firstName = 'Rahul';
// let obj1 = { a: 1, b: 2, c: 3 };
// let obj2 = { firstName: 'darshit', lastName: 'singh', address: 'address1', number: '212381238' }
// let salaryArray = [1, 1, 2, 2, 3, 4]

// nameMap.set(variableName, firstName);
// nameMap.set(key2, 'Abishek');

// // console.log(nameMap.size);
// // console.log(nameMap)

// nameMap.set(true, [1, 2, 3]);
// nameMap.set(['Rahul', 'abishek', 'shubham'], [1, 2, 3]);
// // nameMap.set(null, [1, 2, 3]);
// nameMap.set(obj2, obj1)
// nameMap.set(obj2, salaryArray)

// console.log(nameMap)

// Set method is chainable
// nameMap.set('name1', 'Rahul').set('name2', 'abishek');
// console.log(nameMap)

// Accessing the key value pairs inside a map.
// get method - it accepts key as the argument, returns the value corresponding to the key, returns undefined if key isn't present in the map

// console.log(nameMap.get(obj2));

// Deleting/removing a key from the map
// delete method - removes the corresponding to the key - takes key in the argument

// nameMap.delete(true);
// nameMap.delete(variableName);
// nameMap.delete('name1');

//-------- Clearing the map
// nameMap.clear()
// console.log(nameMap)


// ---------------Looping inside a map

// let myMap = new Map([
//     [key1, value1],
//     [key2, value2],
//     ...
// ])

// let fruitMap = new Map([
//     ['tomato', 200],
//     ['watermelon', 100],
//     ['kiwi', 500],
//     ['banana', 50],
// ])

// console.log(fruitMap)

// for (let element of fruitMap.values()) {
//     console.log(element)
// }

// for (let key of fruitMap.keys()) {
//     console.log(key);
// }

// for (let entry of fruitMap) {
//     console.log(entry)
//     console.log('key is =', entry[0], '--------', 'value is =', entry[1])
// }

// fruitMap.forEach((value, key) => {
//     console.log('key is =', key, '----------', 'value is =', value)
//     console.log(`key is = ${key} ------- value is = ${value}`)
// })

// function sum(anyMap) {
//     let total = 0;
// anyMap.forEach((val, key) => {
//     // total += val
//     // total += anyMap.get(key)
// })

// for (let item of anyMap.values()) {
//     total += item
// }

// for (let key of anyMap.keys()) {
//     total += anyMap.get(key)
// }
// return total;
// }


// console.log(sum(fruitMap)); //850.
// console.log(Array.from(fruitMap.values())); // forEach, map, filter, reduce, slice, join
// console.log(Array.from(fruitMap.keys()));
// let keysArr = Array.from(fruitMap.keys());
// console.log(keysArr)
// let sortedKeys = keysArr.sort()
// console.log(sortedKeys)
// sortedKeys.forEach(key => console.log(fruitMap.get(key)))

// console.log(fruitMap);
// for (let i = 0; i < 2; i++) {
//     fruitMap.delete(keysArr[i]);
// }
// console.log(fruitMap);



//--------- SET -- unique values ONLY, repeated values are not accepted.

// let mySet = new Set();

// console.log(mySet.size);

// add values inside a set ------ add method

// mySet.add(4);
// mySet.add(2);
// mySet.add(3);
// mySet.add(3);
// mySet.add(3);
// mySet.add(3);

// add is chainable
// mySet.add(5).add(6).add(7)

// mySet.add([1, 1, 1, 1, 1, 1])

// for (let value of mySet) {
//     console.log(value)
// }

// let john = { name1: 'John' }
// let doe = { name1: 'Doe' }
// let peter = { name1: 'Peter' }
// let judwaPeter = peter

// console.log(peter == judwaPeter)

// mySet.add(john)
// mySet.add(john)
// mySet.add(peter)
// mySet.add(doe)
// mySet.add(doe)
// mySet.add(judwaPeter);



// delete method
// mySet.delete(john)

// clear()
// mySet.clear();

// console.log(mySet.has(5));
