//filter

const myarray = [1, 3, 5, 8, 6 ,9 ,10]

const val = myarray.forEach( (num) => {
    // console.log(num);
    return num
})

// console.log(val); foreach() do not return 

const sort = myarray.filter( (num)=>{
    return (num%2==0)
})

// console.log(sort);

let newAr=[]
myarray.forEach( (num) => {
    if(num>5){
    newAr.push(num)
    }
})

// console.log(newAr);

const students = [
    {
        name : 'fortin',
        age : 19,
        feeSubmitted : true,
        percentage : 56
    },
    {
        name : 'ramlal',
        age : 20,
        feeSubmitted : true,
        percentage : 59
    },
    {
        name : 'bulla',
        age : 22,
        feeSubmitted : false,
        percentage : 39
    },
    {
        name : 'kilwish',
        age : 23,
        feeSubmitted : true,
        percentage : 29
    },
    {
        name : 'luffy',
        age : 19,
        feeSubmitted : true,
        percentage : 30
    }
]

let defaulter  = students.filter( (obj) => {

    // return obj.feeSubmitted === false .. this return entire object
    if(obj.percentage < 33){
        return obj.name
    }

})

console.log("Failed Students : \n",defaulter);




    
