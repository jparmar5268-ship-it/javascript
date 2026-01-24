//Q-1

//print even no. 1 to 100

for (let i = 0; i <= 100; i++){
    if (i % 2 == 0) {
        console.log("i = ", i);
    }
}

//Q-2

let gameno = 25;

let usrno = prompt("guess the game number");

while (usrno != gameno) {
    usrno=prompt("you entered wrong number,guess the game number again");
}
console.log("crgs,you entered the right number");