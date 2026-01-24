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