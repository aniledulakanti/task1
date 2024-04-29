const prompt=require("prompt-sync")();
let n=parseInt(prompt("enter number : "));
if(n%2==0){
    console.log("Even number");
}else{
    console.log("Odd number");
}