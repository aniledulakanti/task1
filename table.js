function generateMultiplicationTable(number) {
    // Check if the input is a valid number
    if (isNaN(number)) {
        console.log("Invalid input: Please enter a numeric value.");
        return;
    }

    // Generate and print the multiplication table for the given number
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

// Example usage:
generateMultiplicationTable(5); // Generate multiplication table for 5
generateMultiplicationTable(7); // Generate multiplication table for 7
generateMultiplicationTable('abc'); // Invalid input: Please enter a numeric value.
