const secretNumber = 7;
let guess;

do {
  guess = parseInt(prompt("Guess a number between 1 and 10"));

  if (guess > secretNumber) {
    console.log("Guess lower!");
  } else if (guess < secretNumber) {
    console.log("Guess higher!");
  }
} while (guess !== secretNumber);

console.log("You guessed it! The secret number was " + secretNumber);