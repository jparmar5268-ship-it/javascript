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