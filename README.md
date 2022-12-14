# Challenges:

## **Problem 1:**

### *Standardized path problem*
  
  This problem was asked by Quora.
Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.
For example, given /usr/bin/../bin/./scripts/../, return /usr/bin/.

Difficulty: Medium


## **Problem 2:**

###  *Encoding & Decoding*

  This problem was asked by Amazon. Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent 
repeated successive characters as a single count and character. For example, the string AAAABBBCCDAA would
be encoded as 4A3B2C1D2A.

Implement run-length encoding and decoding.
You can assume the string to be encoded have no digits and consists solely of alphabetic characters.
You can assume the string to be decoded is valid.

Difficulty: Easy



## **Problem 3:**

###  *Median*
This problem was asked by Microsoft.
Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list.
Recall that the median of an even-numbered list is the average of the two middle numbers.

Difficulty: Easy


## **Problem 4:**

###  *Permutations*
This problem was asked by Microsoft.
Given a string of numbers, return all possible permutations.

Difficulty: Easy

## **Problem 5:**

###  *Reverse words*
This problem was asked by Google. Given a string of words delimited by spaces, reverse the words in string. 
For example, given "hello world here", return "here world hello"

Difficulty: Medium


## **Problem 6:**

###  *Square & Sort*
This problem was asked by Google.
Given a sorted list of integers, square the elements and give the output in sorted order.
For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

Difficulty: Easy


## **Problem 7:**

###  *Square*
Given a real number "n", find the square root of "n". For example, given n=9, return 3.

Difficulty: Medium


## **Problem 8:**

### *Switch Numbers*
This problem was asked by Google.
Given the head of a singly linked list, swap every two nodes and return its head.
For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.

Difficulty: Easy


## **Problem 9:**

## *Recurring Character*

This problem was asked by Google.
Given a string, return the first recurring character in it, or null if there is no recurring character.
For example, given the string acbbac, return b. Given the string abcdef, return null.

Difficulty: Easy


## **Problem 10:**

## *Last N Element*

Write a JavaScript function to get the last element of an array. 
Passing a parameter 'n' will return the last 'n' elements of the array. 

Difficulty: Easy

## **Problem 11:**

## *Two Numbers Sum*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Difficulty: Easy


## **Problem 12**

### *Occurencies*

This problem was asked by Google.
Given an array of elements, return the length of the longest subarray where all its elements are distinct.
For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of distinct elements is [5, 2, 3, 4, 1].

Difficulty: Easy


## **Problem 13**

### *Occurencies*

This problem was asked by Microsoft.
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
For example, given [100, 4, 200, 1, 3, 2], the longest consecutive element sequence is [1, 2, 3, 4]. Return its length: 4.
Your algorithm should run in O(n) complexity.

Difficulty: Medium


## **Problem 14**

### *Palindromes*

This problem was asked by Google.
Given a string, split it into as few strings as possible such that each string is a palindrome.
For example, given the input string racecarannakayak, return ["racecar", "anna", "kayak"].
Given the input string abc, return ["a", "b", "c"].

Difficulty: Medium


## **Problem 15**

### *Palindrome Number*
This problem was asked by Palantir.
Write a program that checks whether an integer is a palindrome.
For example, 121 is a palindrome, as well as 888. 678 is not a palindrome.
Do not convert the integer into a string.

## **Problem 16**

### *PalindromeNumber*
This problem was asked by Google.
The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.
For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.
You may also use a list or array to represent a set.

Difficulty: Easy

## **Problem 17**

### *Matrix Print*

This problem was asked by Amazon.
Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.
For example, given the following matrix:

[
[1,  2,  3,  4,  5],
[6,  7,  8,  9,  10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20]
]
You should print out the following:

1, 2, 34 ,5 ,10 ,15 ,20 ,19 ,18 ,17 ,16 ,11 ,6 ,7 ,8 ,9 ,14 ,13 ,12

Difficulty: Easy

## **Problem 18**

### *Array Pair Sum*
Given an integer array, output all distinct pairs that sum up to a specific value k. Consider the fact that the same number can add up to k with its duplicates in the array.

For example the array is [1, 1, 2, 3, 4] and the desired sum is 4. Should we output the pair (1, 3) twice or just once? Also do we output the reverse of a pair, meaning both (3, 1) and (1, 3)? Let???s keep the output as short as possible and print each pair only once. So, we will output only one copy of (1, 3). Also note that we shouldn???t output (2, 2) because it???s not a pair of two distinct elements.

arrayPairSum([3, 4, 5, 6, 7], 10) // [ [4, 6], [3, 7] ]
arrayPairSum([3, 4, 5, 4, 4], 8) // [ [3, 5], [4, 4], [4, 4], [4, 4] ]
arrayPairSum([3, 5, 6, 8], 10) // []

Difficulty: Medium


## **Problem 19**

### *Missing Element*
There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

Difficulty: Easy


## **Problem 20**

### *Fibonacci Next Number*
By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

For example, the first ten Fibonacci numbers are:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34
Write a function that accepts a number and returns the number at that position in the fibonnaci sequence.

Difficulty: Medium


## **Problem 20**

### *Fibonacci Next Number*

Write a function that accepts an array of random integers and an integer n. 
Determine the number of times where two integers in the array 
have the difference of n.
integerDifference([1, 1, 5, 6, 9, 16, 27], 4) //8
integerDifference([1, 1, 3, 3], 2) //6

Difficulty: Easy



## **Problem 21**

### *Flat Array*
Write a function that accepts a multi dimensional array and returns a flattened version.
flattenedArray([1, 2, [3, [4], 5, 6], 7]); //[1, 2, 3, 4, 5, 6, 7]
flattenedArray([1, [3, [4, [9, [0]]]], 7]); //[1, 3, 4, 9, 0, 7]