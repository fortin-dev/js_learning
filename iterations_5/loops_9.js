const myArray = [1, 2, 3, 4, 5]

const newArray = myArray.reduce( function(acc, cValue){
    // console.log(` Accumulated Value : ${acc} \n Current value : ${cValue}`);
    return acc*cValue
},1)
console.log(newArray);   


const myTotal = myArray.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);

const allMarks = [
    {
        subject : 'Eng',
        marks : 34
    },
    {
        subject : 'Phy',
        marks : 37
    },
    {
        subject : 'Chem',
        marks : 31
    },
    {
        subject : 'Bio',
        marks : 43
    },
    {
        subject : 'Comp',
        marks : 49
    }
]

const totalMarks = allMarks.reduce((acc, cValue) => acc+cValue)
console.clear()