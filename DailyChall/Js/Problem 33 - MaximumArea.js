var maxArea = function(height) {
    // Result
    let result = 0,

    // Left and right pointers
    left = 0,
    right = height.length-1
    
    // While loop until they get next to each other
    while(left<right){
    // Get the side -> the smallest number out of the two
      let side = Math.min(height[left], height[right])
    // The area is the side* bottom side
      let area = side * (right-left)
        

    //   Push the new result if its bigger than the previous one
      if(area > result) result = area;
        
    // Add one to the left if its bigger than the right pointer
    // (we want to make sure we have the biggest numbers)
      if(height[left]<height[right]) left++;
      else right--;
    }
    
    return result;
  }



console.log(maxArea(height = [1,8,6,2,5,4,8,3,7])) //49