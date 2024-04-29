
const prompt=require("prompt-sync")();
let num=parseInt(prompt("enter number : "));
if(num>=90 && num<=100)
{
    console.log("grade A");
}
else if(num>=80 && num<90)
{
    console.log("grade B");
}
else if(num>=70 && num<80)
{
    console.log("grade C");
}
else if(num>=60 && num<70)
{
    console.log("grade D");
}
else{
    console.log("fails")
}