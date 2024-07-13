const languages = ["js", "python", "java"];
const frameworks = ["react", "Django", "springboot"];

// languages.push(frameworks);
// console.log(languages);

const all = languages.concat(frameworks);
// console.log(all);

const newAll = [...frameworks, ...languages]
// console.log(newAll);

const multiDemArray = [1, 2, 3, [5, 8, 9], [11, 12, 15, [55, 66, [100, 101]]]];
// console.log(multiDemArray.flat(Infinity));
// console.log(multiDemArray);

// console.log(Array.isArray("Abhianv"))
// console.log(Array.from("YadavJi"));
// console.log(Array.from({name : Abhi}));

let marks1 = 89;
let marks2 = 85;
let marks3 = 81;
let marks4 = 50;

console.log(Array.of(marks1, marks2, marks3, marks4));