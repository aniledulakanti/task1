const prompt = require("prompt-sync")();

const number = parseInt(prompt("Enter the number:"));
 if(number>=90){
    console.log("Grade A");
}
else if(number>=80){
    console.log("Grade B");
}
else if(number>=70){
    console.log("Grade C");
}
else if(number>=60){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}