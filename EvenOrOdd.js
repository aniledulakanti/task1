const prompt = require("prompt-sync")();

const num = parseInt(prompt("enter the number: "));
if (num%2===0){
    console.log(num+" is even number");
} else {
    console.log(num+" is odd number");
}