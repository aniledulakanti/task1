function calculateGrade(score) {
    // Check if the input is a valid number between 0 and 100
    if (isNaN(score) || score < 0 || score > 100) {
        return "Invalid input: Please enter a numeric grade between 0 and 100.";
    }

    // Assign letter grades based on the score
    if (score >= 90) {
        return `Your grade of ${score} is A`;
    } else if (score >= 80) {
        return `Your grade of ${score} is B`;
    } else if (score >= 70) {
        return `Your grade of ${score} is C`;
    } else if (score >= 60) {
        return `Your grade of ${score} is D`;
    } else {
        return `Your grade of ${score} is F`;
    }
}

// Example usage:
console.log(calculateGrade(90)); // Your grade of 90 is A
console.log(calculateGrade(75)); // Your grade of 75 is C
console.log(calculateGrade(55)); // Your grade of 55 is F
console.log(calculateGrade('abc')); // Invalid input: Please enter a numeric grade between 0 and 100.
