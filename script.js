function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the cleaned string is equal to its reverse
  return cleanedString === cleanedString.split('').reverse().join('');
}

// Test the function
const input = "race a car";
const isInputPalindrome = isPalindrome(input);
console.log(isInputPalindrome);
