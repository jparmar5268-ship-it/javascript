//Practice

//Q-1

/*  function cntvowel(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
};

const cntvow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}   */

//Q-2

let num = [2, 3, 4, 5, 6];


let calsq=(num) => {
    console.log(num * num);
};

num.forEach(calsq);


num.forEach((num) => {
    console.log(num * num);
});


//Q-3


let marks = [97, 64, 90, 96, 85, 99];

let toper=marks.filter((val) => {
    return val > 90;
});

console.log(toper);


//Q-4

let n = prompt("enter number:")

let arr = [];

for (let i = 1; i <= n; i++){
    arr[i-1] = i;
}

console.log(arr);


//Q-5

let sum=arr.reduce((prev, curr) => {
    return prev + curr;
});

console.log("sum = ",sum);

let fact=arr.reduce((res,curr) => {
    return res * curr;
});

console.log("Factorial = ",fact);