// Given an imaginary chess board of size m x n including only 
// the Queen and the King write a function that takes the positions 
// (coordinates) of both the Queen and the King as parameters and returns a 
// boolean telling whether or not the King is threatened by the Queen.



//Solution 1
const threatens = function (qX, qY, kX, kY) {
    //Define the king coords
    let kingCoords = [kX, kY];
  
    //Array with all the possible diagonal queen moves
    let possibleDiagonalMoves = [];
  
    //Top Right Diagonal moves
    for (let x = qX + 1, y = qY + 1; x !== 9 && y !== 9; x++, y++) {
      possibleDiagonalMoves.push([x, y]);
    }
  
    //Bottom Left Diagonal Moves
    for (let x = qX - 1, y = qY - 1; x !== -1 && y !== -1; x--, y--) {
      possibleDiagonalMoves.push([x, y]);
    }
  
    //Top Left Diagonal Moves
    for (let x = qX - 1, y = qY + 1; x !== -1 && y !== 9; x--, y++) {
      possibleDiagonalMoves.push([x, y]);
    }
  
    //Bottom Right Diagonal Moves
    for (let x = qX + 1, y = qY - 1; x !== 9 && y !== -1; x++, y--) {
      possibleDiagonalMoves.push([x, y]);
    }
  
    //Find if the @ueen can check in a horizontal/vertical (true/false)
    let horVerCheck 
    (kX == qX || kY == qY) ? horVerCheck = true : horVerCheck = false
  
    //Find if the @ueen can check in a diagonal (true/false)
    const diagonalCheck = possibleDiagonalMoves.some(
      el => el.toString() === kingCoords.toString()
    )
  
    //Return true if at least a diagonal/ horizonta;/vertical
    // checks are possible
    if (horVerCheck || diagonalCheck){
      return true
    } else {
      return false
    }
  };

  console.log(threatens(5, 3, 3,7)); //false
  console.log(threatens(2, 3, 1, 4)) //true
  console.log(threatens(2, 8, 2, 1)) //true


  
  //Solution 2
  const threatens2 = function (qX, qY, kX, kY) {

    //Horizontal check (same row)
    let horizontal = qX === kX ? true : false
    //Vertical check (same column)
    let vertical = qY === kY ? true : false
    //Diagonal check (same diagonal)
    let diagonal = Math.abs(qX - kX) === Math.abs(qY - kY)
  
    //Return true if one of the conditions is true
    return horizontal || vertical || diagonal
  }
  
  console.log(threatens2(5, 3, 3, 7)); //false
  console.log(threatens2(2, 3, 1, 4)) //true
  console.log(threatens2(2, 8, 2, 1)) //true
  
  
