// single line comment
/*multi-line comment*/

// ------Operators------

//  ***Arithmetic Op.***

/*let a = 5;
let b = 2;
console.log("a = ", a, " &  b = ", b);


// console.log("Addition : ", a + b);
// console.log("subtraction : ", a - b);
// console.log("multiplication : ", a * b);
// console.log("division : ", a / b);
// console.log("modulus : ", a % b);
// console.log("exponentiation : ", a ** b);

//Unary Operator

// a = a + 1;
a++     //post inc.
a--     //post dec.
++a;    //pre inc.
--a;    //pre dec.

console.log("a = ", a);
console.log("a++ = ", a++);
console.log("a-- = ", a--);
console.log("++a = ", ++a);
console.log("--a = ", --a);     */


//  ***Assignment op.***

/*  let a = 5;
let b = 2;

//a += 4;     a=a+4
// a -= 4;     a=a-4
// a /= 4;     a=a/4
// a *= 4;     a=a*4
// a %= 4;     a=a%4
// a **= 4;     a=a**4

console.log("a = ", a);   */


//  ***comparison Op.***

/*  let a = 5;
let b = 2;

// console.log("5 == 2", a == b);        false
// console.log("5 != 2", a != b);        true
// console.log("5 === 2", a === b);      false
// console.log("5 !== 2", a !== b);      false
// console.log("5 > 2", a > b);          true
// console.log("5 >= 2", a >= b);        true
// console.log("5 < 2", a < b);          false
// console.log("5 <= 2", a <= b);        false      */


//  *** Logical Op.***

/*  let a = 6;
let b = 5;

let con1 = a > b;       //true
let con2 = a === 5;     //false
// console.log("con1 && con2 = ", con1 && con2);
// console.log("con1 || con2 = ", con1 || con2);  true
// console.log("!(6<5) = ", !(a < b));     true     */


//  ***Ternary Op.***

/*  let age = 25;

let result = age >= 18 ? "adult" : "not adult";
console.log(result);    */




// ------Condition Statements------


/*  let age = 18;
let mode = "dark";

if (age >= 18) {
    console.log("you can vote");
}

if(age < 18) {
  console.log("you cannot vote");
}   



if (mode == "dark") {
    color = "black";
}

else{
    color = "white";
}

console.log(color);     */


//odd or even

/*  let num = 10;

if (num % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}   


let mode = "pink";
let color;

if (mode === "dark") {
    color = "black";
}
else if (mode === "blue") {
    color = "blue";
}
else if (mode === "pink") {
    color = "pink";
}
else{
    color = "white";
}

console.log(color);


// if(mode="dark") console.log(mode)        */


//Q-1

// alert("hello");
// let name = prompt("hello");
// console.log(name);

/*  let num = prompt("enter a Number :");

if (num % 5 === 0) {
    console.log("number is multiple of 5");
}

else {
    console.log("number is not multiple of 5");
}   */


//Q-2

let score = prompt("Enter student scores(0-100)");

if (score > 80 && score < 100) {
    console.log("Grade A");
}

else if (score > 70 && score < 89) {
    console.log("Grade B");
}

else if (score > 60 && score < 69) {
    console.log("Grade C");
}

else if (score > 50 && score < 59) {
    console.log("Grade D");
}

else {
    console.log("Fail");
}