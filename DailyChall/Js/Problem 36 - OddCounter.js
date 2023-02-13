//Solution 1
var countOdds = function(low, high) {
    let count = 0

    for(let i=low; i<=high; i++){
        if(i%2) count ++
    }
    return count

    




    
};

//Solution 2
var countOdds2 = function(low, high) {
    const c = Math.round((high-low) / 2);//

    return low % 2 === 1 && high % 2 === 1 ? c+1 : c;    
};


console.log(countOdds(5, 20)) //8
console.log(countOdds(0, 20)) //10
console.log(countOdds(7, 31)) //13
console.log(countOdds(12, 19)) //4