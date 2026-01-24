//String
 
let str1 = "Hello";
let str2 = 'hii';

console.log(str1[4]);


//Template Literals

let stn = `this is template literals`;

console.log(stn);

let obj = {
    item: "pen",
    price: 10,
};

console.log("the cost of", obj.item, "is", obj.price);
let otp = `the cost of ${obj.item} is ${obj.price} rupee`;//using template literals
console.log(otp);

console.log("\tapna\nclg");


//string Methods

let str = "Apna College";

let newstr = str.toUpperCase();
console.log(str);
console.log(newstr);


let str_1 = "APNA COLLEGE";

let newstr1 = str_1.toLowerCase();
console.log(newstr1);


let str3 = "       apna clg   js   ";//cut the white space in string start and end 
console.log(str3.trim());


let str_n = "012345678";
console.log(str_n.slice(1, 6));

let res = str1.concat(str2);//str1+str2
console.log(res);

console.log(str1.replace("H", "o"));

console.log(str1.charAt(0));//Return perticular index's character

