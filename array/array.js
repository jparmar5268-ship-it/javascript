let marks = [89, 87, 80, 53, 67];//typeof array is object
console.log(marks);
console.log(marks.length);//length of array


let hi = ["Hello", "Hii", "Hellow", "Hyyy"];
console.log(hi);

//Looping an array

let heroes = ["ironman", "thor", "hulk", "shaktiman", "piderman"];

//for loop
for (let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

//lor of loop
for (let hero of heroes) {
    console.log(hero);
}



//***************Array Method**************//


let fooditm = ["apple", "litchi", "patato", "tamato"];

fooditm.push("chips", "burgur", "paneer");  //push()
console.log(fooditm);

let dlt=fooditm.pop();  //pop()
console.log(fooditm);
console.log("Deleted item", dlt);

console.log(fooditm.toString());    //tostring()

let marvel_heros = ["thor", "spiderman", "ironman"];
let dc_heros = ["superman", "batman"];

let heros = marvel_heros.concat(dc_heros);  //concat()
console.log(heros);

marvel_heros.unshift("antman"); //unshift() work like push()
console.log(marvel_heros);

let result = marvel_heros.shift();  //shift() work like pop()
console.log(result);

//let heroes = ["ironman", "thor", "hulk", "shaktiman", "piderman"];

console.log(heroes);

console.log(heroes.slice(1, 3));    //slice()

let num = [1, 2, 3, 4, 5, 6, 7];

//num.splice(2, 2, 101, 102);   //splice()
console.log(num);

//add element

//num.splice(2, 0, 101);
//console.log(num);

//Delet element

//num.splice(3, 1);
//console.log(num);

//Replace Element

num.splice(3, 1, 101);
console.log(num);