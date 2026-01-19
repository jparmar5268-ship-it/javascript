console.log("hello");

// variables

fullname = "janvi";     //string
age = 24;               //number
price = 99.99           //number
// x = null;            //null
// y = undefined        //undefined
isfollow = false        //boolean
console.log(isfollow);


let fname = "ravi";
console.log(fname);

const pi = 3.14;
console.log(pi);

let x = BigInt("123");
let y = Symbol("hello!");

// object

const stud = {
    sname: "dhanya",
    sage: 20,
    cgpa: 8.2,
    isPass: true,
};

stud["sage"] = stud["sage"] + 1;

console.log(stud["sage"]);

console.log("hiiii");

const product = {
    pname: "Ball Pan",
    rating: 4,
    offer: 5,
    price: 270,
};

console.log(product);


const profile = {
    username: "janvi",
    isfollow: false,
    followers: 123,
    following: 123,
};

console.log(profile);

console.log(typeof profile["username"]);