//for each

const myarray = [1, 3, 5, 8, 6 ,9 ,10]

myarray.forEach( function val(num){
    // console.log(num);
})

// myarray.forEach( (val)=> console.log(val))


myarray.forEach(print)

function print(values) {
    // console.log(values);
}

myarray.forEach( function val(num, indx, arr){
    // console.log(num, indx, arr);
})

const objArray = [
    {
        name : 'fortin',
        age : 21
    },
    {
        name : 'ramlal',
        age : 40
    },
    {
        name : 'gajodhar',
        age : 34
    },
]

objArray.forEach((objs) => {
    console.log(objs)
    console.log(objs.name)
    console.log(objs.age);
})