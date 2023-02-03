var lengthOfLastWord = function(s) {
    let array = s.trim().split(' ')
    let result = array[array.length-1].length
  
    return result
  };
  
  console.log(lengthOfLastWord("   fly me   to   the moon  ")) //4
  console.log(lengthOfLastWord("Hello wowowow")) //7
  console.log(lengthOfLastWord("Yes we are crazy")) //5
  