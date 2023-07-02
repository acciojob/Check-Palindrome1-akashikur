// complete the given function

function palindrome(){
  const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanedString === cleanedString.split('').reverse().join('');
}
module.exports = palindrome()
