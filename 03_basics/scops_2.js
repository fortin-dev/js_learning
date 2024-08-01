var a = 30;
let b = 50;
if(true){
    let b = 0;
    const c = 45;
    // console.log('Inner a: ', a);
    // console.log('Inner b: ', b);
    // console.log('Inner c: ', c);
}

// console.log('Outer a: ',a);
// console.log('Outer b: ',b);
// console.log('Outer c: ',c);

function one() {
    const name = 'Abhinav';
    let age = 19;
    function two() {
        const ign = 'Fortin';
        var ignAge = 21;
        console.log(name);
        console.log(age);
    }
    // console.log(ign);
    console.log(ignAge);
    two();
}

// one();


if(true){
    const userName = "Abhinav"
    if(userName === "Abhinav"){
        const age =19
        // console.log(userName + age);
    }
    // console.log(age);
}
// console.log(userName);


// console.log(addone(5));
function  addone(numb) {
    return numb+1;
}


addtwo(7)
const addtwo = function(num){
    return num+2;
}