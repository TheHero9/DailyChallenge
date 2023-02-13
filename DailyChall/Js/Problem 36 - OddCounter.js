//Solution 1
var countOdds = function(low, high) {
    let count = 0

    // Loop over the array
    for(let i=low; i<=high; i++){

        // Increment count for each odd number
        if(i%2) count ++
    }
    return count

    




    
};

//Solution 2
var countOdds2 = function(low, high) {

    // Get total number in range/2
    const c = Math.round((high-low) / 2);

    // If low and high are odd => return the number in range +1
    // Else => if we have two even numbers or one even and one odd
    // => return the number in range/2
    return low % 2 === 1 && high % 2 === 1 ? c+1 : c;    
};


console.log(countOdds(5, 20)) //8
console.log(countOdds(0, 20)) //10
console.log(countOdds(7, 31)) //13
console.log(countOdds(12, 19)) //4