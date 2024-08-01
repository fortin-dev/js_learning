//channing
const myArray = [1, 2, 3, 4, 5, 8, 6, 9]

const newArray = myArray
                        .map((num)=> num*10)
                        .map((value) => value-10)
                        .filter((condition) => condition>=50);

console.log(newArray);