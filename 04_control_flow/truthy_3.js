const arr = [];
// if(arr){
//     console.log("array acessed");
// }
// else
// console.log("not available");

// falsy values

// false, 0, -0, BigInt:- 0n, "", null, undefined, NaN

const emptyObj ={}
if (Object.keys(emptyObj).length === 0) {
    // console.log("object is empty");
}

let var1;
// var1 = 2 ?? 10;
// var1 = null ?? 4;
// var1 = undefined ?? 7;
var1 = null ?? undefined ?? 2;

// console.log(var1);

// ................................

// ternary operator
// condition ? true : false

const marsk = 34;
marsk >= 33 ? console.log("Pass"): console.log("fail");;