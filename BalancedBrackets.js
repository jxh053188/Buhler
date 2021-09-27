module.exports = function balancedBrackets(inputStr) {
  let newArray = [];
  let char;
  const bracketPairs = { '(': ')', '[': ']', '{': '}' };
    
  // Check that input is not empty or an odd number of characters.
  if (inputStr.length === 0 || inputStr.length %2 !== 0) {
    return false
  //If input string is even and not empty, begin looping through to match brackets. 
  } else {
    for (let i = 0; i < inputStr.length; i++) {
      char = inputStr[i];
      //Add input character to new array. 
        if (bracketPairs[char]) {
          newArray.push(char);
        } else {
       //Check if closing bracket matches opening bracket and remove from array if it does. If not return false.
          if (char !== bracketPairs[newArray.pop()]) {
            return false;
          }
        }  
    }
    //If at the end, new array is empty, the input was balanced, returns true. 
    return newArray.length === 0;
  }
}
