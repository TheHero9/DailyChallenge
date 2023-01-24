<?php

$lastNElement = function($array, $n){
	
	$length = count($array);
	$position = $length - $n;
	
	return $array[$position] . " ";
	
};

echo $lastNElement([1, 2, 3, 4, 5], 4); //2
echo $lastNElement([1, 2 ,312 , 42, 5], 2); //42
echo $lastNElement(["John", "David", "Pete"],1); //Pete 


?>