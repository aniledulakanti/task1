let age = 25;
let price;
if(age < 12){
    price=5;
}else if (age >= 65){
    price = 8;
} else {
    price = 10;
}
console.log("your ticket price is $" +price);