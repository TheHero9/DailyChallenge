var distinctNames = function(ideas) {
      let results = []
    
    //   Make sure we don't have the same name in the starting array
      let setTest = new Set()
      for(let a=0; a<ideas.length; a++){
        setTest.add(ideas[a])
      }
      if(ideas.length !== setTest.size) return false
      
    
    //   Double for loop
      for(let i=0; i<ideas.length; i++){
        let first = ideas[i]
        if(first.length>10 || first.length<1) return false
        
        for(let j=0; j<ideas.length; j++){
          let second = ideas[j]
            
        //   If we have different names 
        //  => get the first letter of the word and add it to the rest of the second word(we need to remove the first letter of the second word)

          if(i != j){
            let firstName =  first.slice(0,1) + second.substring(1)
            let secondName = second.slice(0,1) + first.substring(1)
            
            // Push into the array only if we dont have the same name in the starting array
            if(!ideas.includes(firstName) && !ideas.includes(secondName) ){
              results.push([firstName, secondName])
    
            }
        }
    
        }
      }
    
      return results.length
    };


console.log(distinctNames(["coffee","donuts","time","toffee"])) //6
console.log(distinctNames(["coffee","dime","toffee"])) //4
console.log(distinctNames(["lack","back"])) //0