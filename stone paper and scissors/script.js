let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(."choice");

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("Click", () => {
        console.log("Choice was clicked");
    });
});