//if

const loginStatus = true;
const temp = 45;

if(temp <= 50){
        // console.log("less than 50");
}
else{
    // console.log("more than 50");
}

const marks = 89;

if(marks > 50){
    let reward = 'chocolate'
    // console.log("u got a chocalate");
}

//strict checking '==='
// if(2 === "2"){
//     console.log('wrong check');
// }
// else{
//     console.log('right check');
// }

// console.log(reward);


const credit =1000;

// if (credit < 500) console.log('TestCase1');
if(credit < 300){
    // console.log("credit is less than 500");
}
else if(credit < 500){
    // console.log("credit is less than 500");
}
else if(credit < 750){
    // console.log("credit is less than 500");
}
else if(credit < 900){
    // console.log("credit is less than 500");
}
else{
    // console.log("credit is more than 1000");
}

const email = true;
const pNum = false;
const googleAcc = true;
const git = false;

// if(email && googleAcc && 2==2){
//     console.log("&& only works if all the condition are true");
// }
// if(email && googleAcc && 2==3){
//     console.log("&& only works if all the condition are true");
// }

if(pNum || googleAcc){
    console.log("if any condition is true || allows to pass");
}

