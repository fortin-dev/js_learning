function print() {
    console.log("My Name is Abhinav");
}

// print();

// function addNum(num1 , num2 ){
//     console.log(num1+num2);
// }

// function addNum(num1 , num2 ){
//     let result = num1+num2;
//     return result;
// }

function addNum(num1 , num2 ){
    return num1+num2;
}

const result = addNum(14,5);
// console.log( 'Result is ', result);
// console.log(` Result is : ${result}`);

function userLogin(UserName) {
    if(!UserName){
        return 'Enter UserName '
    }
    else
    return `User ${UserName} Logged-IN`
} 

const message = userLogin("Abhinav");
// console.log(message);

function usingSpread(var1, var2, ...number) {
    return number
}

// console.log(usingSpread(100,33,324,34,342,43,334));

const User={
    userName : "Abhinav",
    age : "19",
}

function objPass(obj){
    console.log(`user ${obj.userName} is ${obj.age} year old`);
}

// objPass(User);

// objPass({
//     userName :'Fortin',
//     age : 21,
// })


const Arrays = [1, 2, 5, 6, 9];

function passArray(anyArray){
    console.log(anyArray[2]);
}

// passArray(Arrays);
passArray([8, 9, 7, 4 ,2]);