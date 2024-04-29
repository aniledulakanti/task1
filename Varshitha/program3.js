const prompt=require("prompt-sync")();
let n=parseInt(prompt("enter number : "));
for(let i=1;i<11;i++){
    console.log(n+"*"+i+"="+n*i);
}