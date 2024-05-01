const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the n: "));

for (let i=1; i<11; i++) {
    console.log(n +" * "+i+" = "+(n*i));
}
//user name