//for loops

// for (let i = 0; i <= 10; i++) {
//     const element = i
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(i==9)
//     console.log("9 Detected");

//     console.log(element);
// }
// console.log(element);

//...............Nested Loop.........

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        // console.log(`Inner loop : ${i}, Outer Loop ${j}`);  
    }
}


let marks= [12, 14, 15, 16, 9];

for (let i = 0; i < marks.length; i++) {
    // const element = marks[i];
    // console.log(element );
    
}
//..............break............

for (let i = 0; i <= 10; i++) {
        const element = i;
        if(i==6){
        console.log("6 Detected");
        break;
        }
        console.log(element);
}

//.........................continue.............

for (let i = 0; i <= 10; i++) {
        const element = i;
        if(i==6){
        console.log("6 Detected");
        continue;
        }
        console.log(element);
}