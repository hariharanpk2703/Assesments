// let single = 'single quotes';

// let double = "double quotes";

// let backtick = `backticks`

// let amount = 1000;
// console.log(`Rupees ${amount}`); //template literal, works only with backtics.

// let guestList = `Guests :
//  *Rahul
//  *Shubham
//  *abishek`

// console.log("  hi there \"hello\"   ")
// let guestList = 'Guests: \n *Rahul \n *Shubham \n *Abishek';
// console.log(guestList);

// let str = "Hi there How are you \
// *How are you \
// *How are you \
// *How are you"

// console.log(str);

// let str = `Hello  \`Hi" there`

// console.log(str);

//Strings are IMMUTABLE IN JS
// let str = 'apple'
// console.log(str.length);

// // console.log(str[0]);
// // console.log(str.charAt(0));
// str[1] = 'b';

// console.log('STR', str[0], str);

// let str1 = str;
// // str1[0] = 'b'; //this won't work. because strings are IMMUTABLE
// str1 = 'banana'; //reassign the WHOLE string, this works!

// console.log('STR ONE', str1[0], str1);


// CONCATENATION.
// let name1 = 'Vijay Pratap';
// let age = '22';
// let combination = name1 + ' is ' + age + ' years old';

//console.log(combination);

// let newStr = age.concat(name1);

// console.log(newStr);

// toUpperCase() and toLowerCase()
// let str = "Hello How Are You"
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

// indexOf()
// let str = 'Widget with id'
// console.log(str.length);
// console.log(str.indexOf('id'));
// console.log(str.lastIndexOf('id'));
// console.log(str.indexOf('id', 2)); //second argument tells us where to start the search, by default it is 0;

// --------includes()
// console.log(str.includes('a'));

// --------------slice()

// let str = 'stringify';

// console.log(str.slice(0, 5)); //strin
// console.log(str.slice(0, 1)); //s
// console.log(str.slice(2)); //ringify
// console.log(str.slice(-4, -1)); //gif

// ----------------substring()
// let str = 'stringify'
// console.log(str.substring(2, 6)) //starting index, ending index, similar to slice
// console.log(str.substring(6, 2)) // when starting index > ending index, arguments are swapped.
//in substring() you CANNOT use negative arguments

// --------------split();
// let name1 = 'Mayank';
// let greeting = 'Hi how are you';

// let splitStr = name1.split('') // argument for split() is a string
// let splitStr = greeting.split(' ');
// console.log(splitStr)

// let arr = [1, 2, 3]
// console.log(arr.join('*'))

// let greeting = 'Hi how are you?';
// let splitStr = greeting.split(' '); //typeof splitStr -> array
// let str = splitStr.join('-');

// console.log(str);//Hi-how-are-you

// NOTE - split and join are chainable as well!
// let greeting = 'Hi how are you ?';
// console.log(greeting.split(' ').join('-'));

// let greeting = 'Hi how are you'; //reverse this string using split join and reverse
// let newStr = ''
// for (let i = greeting.length - 1; i >= 0; i--) {
//     newStr += greeting[i];
// }
// console.log(newStr)

// console.log(greeting.split('').reverse().join('')) //reverses the whole string just like the for loop above.
// console.log(greeting.split(' ').reverse().join(' '))//reverse the order of the words.

// -------replace(), replaceAll()

// let str = 'John is a good guy. John is a working developer'

// // console.log(str.replace('John', 'Mike')); // replaces ONLY the first occurrence

// console.log(str.replaceAll('John', 'Mike'));

// let str = 'Widget with id'
// console.log(str.replace('id', '**'));
// console.log(str.replaceAll('id', '**'))

// -------------trim()

// let str = '             Rahul    ***   Sharma              '
// console.log(str);
// console.log(str.trim());






















