// // Creating promise
// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         // console.log('Async Function');
//         // resolve();
//     }, 2000)
// })

// newPromise.then(()=>{
//     console.log('Promise Consumed');
// })

// //Creating promise in different way

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log("This is async task 2");
//         // resolve();
//     }, 1000);
// })
// .then(()=>{
//     console.log("Consumed Promise two");
// });

// //Passing object to resolve()
// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve({username :'fortin', email:'abc@ggl.com'})
//     }, 2000);
// })

// promiseThree.then((user)=>{
//     console.log(user);
//     console.log(user.username);
// })

// //using .then() , .catch() & .finally()

// const promisefour =new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let err = true;
//     if(!err){
//         // resolve({name:'fortin', age:21})
//     }
//     else{
//         // reject('user not found')
//     }
//     }, 1000);
// })

// promisefour.then((user)=>{
//     return user.name;
// })
// .then((userName)=>{
//     console.log(userName);
// })
// .catch((eror)=>{
//     console.log(eror);
// })
// // .finally(()=> console.log('The promise is executed'))


// // using async await 

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(false){
//             resolve({username:'Fortin', age:21, email:'abc@ggl.com'})
//         }
//         else{
//             reject('User Not Found')
//         }
//     }, 1000);
// });

// async function consumePrmsFive(){
//     try {
//         let result = await promiseFive;
//         console.log(result);   
//     } catch (error) {
//         console.error(error);
//     }    
// };

// consumePrmsFive();// calling consumer function for promise five

// async function getAllUser(){
//     try {
//         const result = await fetch("https://jsonplaceholder.typicode.com/users");
//         const date = await result.json();
//         console.log(date);
//     } catch (error) {
//         console.log(error);
//     }
// };

// getAllUser();

//using .then and .catch in fetch api
fetch('https://api.github.com/')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.error(err);
})