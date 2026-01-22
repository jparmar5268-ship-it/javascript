//  -----------Functions-----------


/*function myfun(msg){    //parameter
    console.log(msg);
}

myfun("hello");     //argument  

//Function 2 numbers,sum

function sum(x,y){
    s = x + y;
    return s;
}

let value = sum(3,4);
console.log(value); 

//sum fun

function sum(a, b) {
    return a + b;
};

const arrowsum = (a, b) => {      //arrow fun
    return a + b;
};
//mul fun

function mul() {
    return a * b;
};

const arrowmul = (a, b) => {  //arrow fun
    console.log(a * b);
};

const printhello = () => {
    console.log("hello!")
};      */


//  ---------foreach Loop//higher order fun/method-------------


/*  let arr = [1,2,3,4,5];

arr.forEach(function printVal(val)
{
    console.log(val);
});

let arr1 = ["pune", "delhi", "mumbai"];

arr1.forEach((val,index,arr) => {
    console.log(val.toUpperCase(),index,arr);
}); */


//  -------------array Methods-----------

//Map

let num = [67, 52, 39];

let newarr = num.map((val) => {
    return val*2;
});

console.log(newarr);

let calsq = (num) => {
    console.log(num * num);
};

//Filter

let arr = [1, 2, 3, 4, 5, 6, 7];

let evenarr = arr.filter((val) => {
    return val >3 ;
});

console.log(evenarr);


//reduce

let arr1 = [1, 2, 3, 4];


const output = arr1.reduce((res, curr) => {
    return res + curr;
});

console.log(output);    //10

//to print large number in array 

const otp = arr1.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(otp);   //4