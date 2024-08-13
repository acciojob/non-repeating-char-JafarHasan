function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};

    // First pass: count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Second pass: find the first character with a count of 1
	
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
