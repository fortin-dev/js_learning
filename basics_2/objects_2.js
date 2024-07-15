// const instaUser = Object();

const instaUser = {};

instaUser.id = '0p_fortin'
instaUser.age = 19;
instaUser.accType = 'Private'
instaUser.varified = false

// console.log(instaUser);
// console.log(typeof instaUser);

const User = {
    email : 'abhinav@google.com',
    userName : {
        fullUserName :{
            firstName : 'Abhinav',
            lastName : 'Yadav',
        }
    }    
}

// console.log(User.userName.fullUserName.firstName);

const obj1 = { 1:'a', 2:'b'};
const obj2 = { 3:'v', 4:'c'};
const obj3 = { 5:'z', 6:'x'};

// const obj4 = {obj1, obj2, obj3 }
// const obj4 = Object.assign({}, obj1, obj2, obj3);

// const obj4 ={...obj1, ...obj2, ...obj3}
// console.log(obj4);

const arrayObj = [
    {
        name : 'Abhi',
        age : 19,
    },
    {
        id : 'fortin',
        joinDate : '20-04-2024',
    },
    {
        email : "xyz@gmail.com",
        linkAcc : 'facebook',
    },
]

// console.log(arrayObj);
// console.log(arrayObj[1]);
// console.log(arrayObj[1].id);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));
// console.log(typeof Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('varified'));

const course = {
    coursename: "Fortin's Academy",
    price: "1999",
    courseInstructor: "Abhinav"
}

const{courseInstructor: Instructor} = course ;
// console.log(Instructor);


