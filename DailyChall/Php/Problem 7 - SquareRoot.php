<?php

$square = function($n){
	return round(sqrt($n), 2) . ' ';
	
};

echo $square(4); //2
echo $square(0); //0
echo $square(12); //3.46
echo $square(100); //10

?>