let btn1 = document.querySelector('#btn1');

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
//     // console.log("btn1 was clicked");
//     // let a = 25;
//     // a++;
//     // console.log(a);
// };

// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
// });

btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked-heandler 1");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked-heandler 2");
});

const heandler3 = () => {
    console.log("button1 was clicked-heandler 3");
};

btn1.addEventListener("click", heandler3);

btn1.addEventListener("click", () => {
    console.log("button1 was clicked-heandler 4");
});

btn1.removeEventListener("click", heandler3);

let div = document.querySelector("div");

// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
//     //console.log("you are inside div");
// };