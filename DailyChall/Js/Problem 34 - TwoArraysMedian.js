
var findMedianSortedArrays = function(nums1, nums2) {
    let combined = [...nums1, ...nums2].sort((a,b) => a-b)
    let length = combined.length
  
    if(length%2) return combined[length/2-0.5]
    else return (combined[length/2-1] + combined[length/2])/2
  
    
  };
  
  console.log(findMedianSortedArrays([1,3,4], [2])) //2.5
  console.log(findMedianSortedArrays([8,9,10], [2,6,7])) //7.5
  console.log(findMedianSortedArrays([5,6,71,2], [4,29,1])) //5
  console.log(findMedianSortedArrays([51,12,4,9], [0])) //9