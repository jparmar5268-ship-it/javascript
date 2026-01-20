//For Loop

// for (let count = 1; count <= 5; count++) {
//     console.log("apna clg");
// }

//calculate sum 1 to 5

/*  let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}

console.log("sum = ", sum); */


//While loop
/*let i = 10;
while (i >= 5) {
    console.log("i = ", i);
}*/


//Do-while

/*  let i = 1;

do {
    console.log("i = ",i);
    i++;
} while (i <= 5);   */



//For-of Loop

/*  let str = "apna clg";
let size = 0;

for (let i of str) {
    console.log("i = ", i);
    size++;
}

console.log("string size := ", size);   */


//For-in Loop


let student = {
    name: "rahul",
    age: 20,
    cgps: 7.5,
    ispass: true,
};

for (let key in student) {
    console.log("key = ",key,"value = ",student[key]);
}