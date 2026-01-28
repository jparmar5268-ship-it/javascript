/*let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.setAttribute("class","newclass")); */

// let div = document.querySelector("div");

// div.style.backgroundColor = "purple";
// div.style.fontSize = "26px";

// div.innerText = "hello";

//Insert element

let newbtn = document.createElement("button");
newbtn.innerText = "Click me!";
console.log(newbtn);

let div = document.querySelector("p");
// div.append(newbtn);
div.prepend(newbtn);
div.before(newbtn);
div.after(newbtn);


let newhding = document.createElement("h1");
newhding.innerHTML = "<i>HI,i am new!";

document.querySelector("body").prepend(newhding);

let para = document.querySelector("p");
para.remove();

newhding.remove();

