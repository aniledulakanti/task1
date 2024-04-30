const marks = 90; 
if (marks < 0 || marks > 100) {
  console.log("Invalid input: Please enter a numeric grade between 0 and 100.");
} else {
  let Grade;
  if (marks >= 90) {
    Grade = "A";
  } else if (marks >= 80) {
    Grade = "B";
  } else if (marks >= 70) {
    Grade = "C";
  } else if (marks >= 60) {
    Grade = "D";
  } else {
    Grade = "F";
  }
  console.log(`Your grade of ${marks} is ${Grade}`);
}