// This problem was asked by Microsoft.

// Given a string of numbers, return all possible permutations.

function permutation(string){
  
    //Break condition
    if(string.length<2) return string
  
    var permutations =[]
    for(let i=0; i<string.length;i++){
        let char = string[i]
  
        //Avoid duplicates
        if(string.indexOf(char) != i) continue
  
        //Concat the 2 strings
        let remainingString = string.slice(0,i)+string.slice(i+1,string.length)
  
        for (var subPermutation of permutation(remainingString))
          permutations.push(char + subPermutation)
        
    }
    return permutations
  }
  

  console.log(permutation("21")) //["21", "12"]
  console.log(permutation("1456")) //["145", "154", "415", "451", "514", "541"]
  console.log(permutation("123456")) //["134", "143", "314", "341", "413", "431"]
