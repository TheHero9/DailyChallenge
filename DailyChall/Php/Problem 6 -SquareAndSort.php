<?php
$squareAndSort = function($array){
	$squaredArray =  [];
	
	foreach($array as $value){
		array_push($squaredArray , abs($value*$value));
	};
	
	sort($squaredArray);
	
    return ($squaredArray);
};

print_r($squareAndSort([1,3,2,5,4])); //1, 4, 9, 16, 25
print_r($squareAndSort([25,0,1,8,2])); //0, 1, 4, 64, 625

?>