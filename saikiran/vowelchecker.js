let char = '0'; 
char = char.toLowerCase();
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(`The character ${char} is a vowel.`);
} else {
    console.log(`The character ${char} is not a vowel.`);
}