//Q-1

let marks = [50, 50, 50, 60, 60, 60];
let sum = 0;
let avg = 0;

for (let m of marks) {
    sum = sum + m;
}

console.log("Total is : ",sum);
avg = sum / 6;
console.log("avg of student is : ", avg);

//Q-2

let prc = [250, 645, 300, 900, 50];
let index = 0;

for (let val of prc) {
    console.log(`value at insex ${index}=${val}`);
    let ofr = val / 10;
    prc[index] = prc[index] - ofr;
    console.log(`value after offer ${prc[index]}`);
    index++;
}