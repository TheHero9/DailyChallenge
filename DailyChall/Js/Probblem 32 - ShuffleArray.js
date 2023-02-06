var shuffle = function(nums, n) {
    let results = []
  
    let l = n
    for(let i=0; i<n; i++){
      results.push(nums[i], nums[l])
      l++;
    }
      return results
  };
  
  console.log(shuffle([2,5,1,3,4,7],3)) //[2, 3, 5, 4, 1, 7] 
  console.log(shuffle([6,1,2,7],2)) //[6, 2, 1, 7] 
  console.log(shuffle([8,9,0,1,3,5,7,8],4)) //[8, 3, 9, 5, 0, 7, 1, 8]