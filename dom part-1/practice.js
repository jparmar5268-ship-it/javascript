// Q - 1 
    
let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + " from apna clg student";


//Q-2

let divs = document.querySelectorAll(".box");
//console.log(divs[0]);

let idx = 1;

for (div of divs) {
    //console.log(div.innerText);
    div.innerText = `new unique value ${idx}`;
    idx++;
}

// divs[0].innerText = "new unique value one";
// divs[1].innerText = "new unique value two";
// divs[2].innerText = "new unique value three";