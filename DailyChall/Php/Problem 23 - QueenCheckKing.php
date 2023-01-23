<?php

function checkWithQueen($qX, $qY, $kX, $kY){
    // Find if the King and the Queen are on the same row
	$horizontal = $qX === $kX ? true : false;

	// Find if the King and the Queen are on the same column
	$vertical = $qY === $kY ? true : false;

	// Find if the King and the Queen are on the same diagonal
	$diagonal = abs($qX - $kX) === abs($qY - $kY);
	
    //Return true if something is true
	return $horizontal || $vertical || $diagonal;
};

var_dump(checkWithQueen(3, 5, 3, 8)); //true
var_dump(checkWithQueen(5, 3, 3, 7)); //false
var_dump(checkWithQueen(1, 1, 6, 6)); //true
?>
