let date = new Date()

// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);


// let myCreatedDate = new Date(2023, 11, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-07-2024")
// console.log(myCreatedDate.toLocaleString());

// let newDate = Date.now();
// console.log(newDate)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()+1);

console.log(newDate.toLocaleDateString('default',{
    weekday : "long"
}));