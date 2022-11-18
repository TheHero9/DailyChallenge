// This problem was asked by Google.
// Given a string, split it into as few strings as possible such that each string is a palindrome.
// For example, given the input string racecarannakayak, return ["racecar", "anna", "kayak"].
// Given the input string abc, return ["a", "b", "c"].



function isPalindrome(str){
    if(str.length <= 1)return false
  
    let reversed = str.split('').reverse().join('')
  
    if(str === reversed) return true 
    else return false
  }
  
  function checkPalindrome(str){
    const palindromeFinal =[]
    let temp = ''
  
    for (let i=0; i<str.length; i++){
       if(isPalindrome(temp)){
         palindromeFinal.push(temp)
         temp = ''
       }
       temp += str[i]
    }
  
    if(isPalindrome(temp)) palindromeFinal.push(temp)
    else {
      palindromeFinal.push(...temp)
    }
    return palindromeFinal
  }
  
  console.log(checkPalindrome("racecarannakayak")) //["racecar", "anna", "kayak"]
  