// Difficulty: Easy
// This problem was asked by Google.
// Given a sorted list of integers, square the elements and give the output in sorted order.
// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].


function sortAndSquare(arr){
    let squaredArray = []

    for(let i=0; i<=arr.length; i++){
        squaredArray.push(arr[i]*arr[i])
    }

    const sortedArray = squaredArray.sort((a,b)=>a-b)
    return sortedArray
}


console.log(sortAndSquare([-9, -2, 0, 2, 3])) //[0, 4, 4, 9, 81]
console.log(sortAndSquare([-2,-1,10,8,-5])) //[1, 4, 25, 64, 100]