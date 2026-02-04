let boxes = document.querySelectorAll(".box");//for access all boxes
let resetbtn = document.querySelector("#reset-button");//for access reset button
let newgamebtn = document.querySelector("#new-button");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX,playerO

//2-d array
//let arr2 = [["apple", "litchi"], ["patato", "mushroom"], ["pants", "shirts"]];

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
];

const resetgame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("box was click");
        if (turnO) {//playerO
            box.innerText = "O";
            turnO = false;
            box.style.color = "red";
        }
        else {//playerX
            box.innerText = "X";
            turnO = true;
            box.style.color = "green";
        }
        box.disabled = true;

        chechwinner();
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwineer = (winner) => {
    msg.innerText = `congratulation,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const chechwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                // console.log("winner", pos1val);
                showwineer(pos1val);
            }
        }
    }
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
