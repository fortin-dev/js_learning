const name = "abhinav"
const age = 19

// console.log(name + " is " + age +"yr old");

//better way to write above line of code is to use string interpolation

// console.log(`hello my name is ${name} and  I am ${age} year old`);

const hobby ="gaming"

// console.log(hobby[0]);
// console.log(hobby.__proto__);............//works in browser

// console.log(hobby.charAt(1));
// console.log(hobby.toUpperCase());

// console.log(hobby.length);
// console.log(hobby.indexOf('m'));
// console.log(hobby.indexOf('z'));......if the asked value is not present then the output index is -1

// const subHobby = hobby.substring(1, 4);
// console.log(subHobby);
//  const newhobby = hobby.slice(-3, 4);...........used to give -ve value
//  console.log(newhobby);
//  const spacedName ="   abhinav    ";
//  console.log(spacedName);
//  console.log(spacedName.trim());

 const url= "https://fortin.com/abhinav%20yadav"

console.log(url.replace('%20', '-'))
console.log(url);

console.log(hobby.includes("yadav"));


const games= "pubg-bgmi-cod-ff"
console.log(games.split('-'));
