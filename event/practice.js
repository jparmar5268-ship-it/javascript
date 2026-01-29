let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

modebtn.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
    }
    else {
        currmode = "light";
        //document.querySelector("body").style.backgroundColor = "white";
         body.classList.add("light");
    }

    console.log(currmode);
});