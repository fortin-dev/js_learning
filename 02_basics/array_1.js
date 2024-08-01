
const numbers = [1, 2, 5, 8, 9]
const languages = ["js","python","java"]

const arrayF = new Array("abhinav", "yadav")
// console.log(numbers);
// console.log(languages);
// console.log(arrayF);

const myArray = new Array;
myArray.push(5);
myArray.push(6);
myArray.push(9);
myArray.push(8);
myArray.push(10);
// console.log(myArray);
// console.log(myArray[1]);

//myArray.pop();
// console.log(myArray);
//myArray.pop(2);poping from index dosent work
// console.log(myArray);

// myArray.unshift(10);
// console.log(myArray);
// console.log(myArray.length);
// myArray.shift();
// console.log(myArray.length);
// myArray.shift;
// console.log(myArray);

// console.log(myArray.includes(15));
// console.log(myArray.indexOf(1));
// console.log(myArray.indexOf(5));

const newArr = myArray.join();
// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);

console.log(myArray);

const mya1 = myArray.slice(0,3);
console.log(mya1);
console.log("after slice : "+ myArray);

const mya2 = myArray.splice(0,3);
console.log(mya2);
console.log(`after splice : ${myArray}`);