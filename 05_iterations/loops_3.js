//for of

const ar = [1, 3, 4, 6, 3, 6,]

for (const num of ar) {
    // console.log(num," ");
}

const hello = 'hello bro'
for (const char of hello) {
    // console.log(char);
}

const obj = {
    name : 'fortin',
    age : 21,
    git :true
}

// for (const num of obj) {
//     console.log(num);
// }

for (const key of Object.keys(obj)) {
    // console.log(key);
}

for (const key of Object.values(obj)) {
    // console.log(key);
}

//......................................Maps.........................

const maps = new Map()
maps.set('name', "fortin")
maps.set('age', 21)
maps.set('github', true)

// console.log(typeof maps);

for (const [key, values] of maps) {
    console.log(key, ':-', values);
}

// for (const [key, values] of obj) {
//     console.log(key, ':-', values);
// }
