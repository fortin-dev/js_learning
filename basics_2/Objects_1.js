//singleton onjects

const mySym = Symbol("key1");

const myObj = {
    name : "Abhinav",   
    age : 19,
    "course" : "BCA",
    location : "Lucknow",
    email : "abhiydv178@gmail.com",
    [mySym] : "newKey",
}

// console.log(myObj);
// console.log(myObj.name);
// console.log(myObj["age"]);
// console.log(myObj["course"]);
// console.log(typeof myObj[mySym]);


myObj.email = "fortine@gmail.com";
// Object.freeze(myObj)
// console.log(myObj.email);
myObj.email = "yadavJI@gmail.com";
// console.log(myObj.email);

myObj.wellcome = function () {
    console.log("Wellcome to JS");
}
// myObj.wellcomeByName = function () {
//     console.log(`Wellcome to JS ${myObj.name}`);
// }
myObj.wellcomeByName = function () {
    console.log(`Wellcome to JS ${this.name}`);
}

myObj.wellcome();
myObj.wellcomeByName();