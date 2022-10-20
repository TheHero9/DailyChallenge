// Difficulty: Easy
// This problem was asked by Amazon.

// Run-length encoding is a fast and simple method
//of encoding strings. The basic idea is to represent
//repeated successive characters as a single count and
//character. For example, the string AAAABBBCCDAA would
//be encoded as 4A3B2C1D2A.

// Implement run-length encoding and decoding.
//You can assume the string to be encoded have no
// digits and consists solely of alphabetic characters.
//You can assume the string to be decoded is valid.


//ENCODING
function Encoding(string) {
    let count = 0;
    let encoded = "";
    let letter = string[0];
  
    //Loop over the array
    for (let i = 0; i < string.length; i++) {
      let currLetter = string[i];
  
    //If the letter is "new"
      if (currLetter !== letter) {
        encoded = encoded + count + letter;
        letter = string[i];
        count = 1;

    //If the letter is the same
      } else {
        count++;
      }
    }
  
    //If there is only one letter
    encoded = encoded + count + letter;
  
    return encoded;
  }
  


//DECODING
  function Decoding(string) {
    let decoded = ""
    let index = 0
  
    while(index< string.length){
      //     old string + string[WhatLetter].repeat(string[HowManyTimes])
      decoded = decoded + string[index+1].repeat(string[index])
  
      //Go to the next pair
      index += 2
    }
  
    return decoded
  
  }

console.log(Decoding("3A")); // 'AAA'
console.log(Decoding("4A3B2C1D2A")); // 'AAAABBBCCDAA'

console.log(Encoding("AAAAABBBCCDAA")); // "5A3B2C1D2A"
console.log(Encoding('AAA'));  // '3A'
console.log(Encoding('AAAABBBCCDAA')); // '4A3B2C1D2A'
