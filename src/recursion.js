/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if(n < 0){
		return null;
	}
	if (n === 0) {
		return 1;
	}
	return (n * factorial(n-1));
};
//pass in 5
//5 * 4 * 3 * 2 * 1
// 5* fact(4)
//		4 * fac(3)
//			3 * fac(2)
//					2* 1

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
//input array
//output return sum array
//method iterate of the array, take value + next value
//
//1,2,3,4,5,6 - 6
//1,2,3,4,5   - 5
//1,2,3,4     - 4

var sum = function(array) {
	var newArray = array.slice();
	if (newArray.length === 0){
		return 0 ;
	}
	var lastItem = newArray.pop();
	return (lastItem + sum(newArray));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
//input nested array
//output sum of the array
//method flatten array
// sum the array
//
var arraySum = function(array) {

	var newArray = array.flat();

	for(var i = 0; i < newArray.length; i++){
       if(Array.isArray(newArray[i])) {
		 var newArray = newArray.flat();
	   }
	}

	if(newArray.length === 0){
		return 0;
	}
	var lastItem = newArray.pop();
	return(lastItem + arraySum(newArray));

};

// ******************* SECOND SOLUTION **************************** 

// var arraySum = function(array) {
// 	var sum = 0
// 	for(var i = 0; i < array.length; i++){
// 		if(Array.isArray(array[i])){
// 			sum += arraySum(array[i])
// 		}
// 		else{
// 			sum += array[i]
// 		}
// 	}
// 	return sum
// };

// input  - number negative or positive - 
// output - true or false - boolean
// age case - array - flatten 
// method  - if number is positive minus 2 until number === 0. if number is negative change numbers to positive

// 4. Check if a number is even.
var isEven = function(n) {
	var posNum = Math.abs(n)

	if(posNum === 0) {
		return true;

	}else if(posNum === 1){ 
		return false;
	}	
	posNum = posNum - 2;
	console.log(posNum)

	return isEven(posNum)
};

//input - number
//output - sum of all numbers below the number given
//method - sum variable - input number - 1 until it is 0; add the number to the sum.
//10 input
// 10 - 1 = 9 --- sum(0) + 9 = 9
//  9 - 1 = 8 --- sum(9) + 8 = 17
//  8 - 1 = 7 --- sum(17) + 7 = 24
// -1 -1 = -2

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {

	if (n === 0 || n === 1) {
		return 0;
	}

	if (n >= 2){
	return n - 1 + sumBelow(n - 1)
    }

    if(n < 0){
    	return n + 1 + sumBelow(n + 1)
    }

};

// ******************* SECOND SOLUTION **************************** 

// var sumBelow = function(n) {
// 	newNum = Math.abs(n)
// 	if (newNum === 1 || newNum === 0){
// 		return 0
// 	}
// 	result = newNum - 1 + sumBelow(newNum-1)
	
// 	if (n<0){
// 		result = result * (-1)
// 		return result
// 	}else{
// 		return result
// 	}
	
// };

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8] 

// input range(2,9)

//steps   x  | y  |      array
//step 1  2  | 9  |[]    []
//step 2  3  | 9  |[3]   [3]
//step 3  4  | 9  |[4]   [3, 4]
//step 4  5  | 9  |[5]   [3, 4, 5]
//step 5  6  | 9  |[6]   [3, 4, 5, 6]
//step 6  7  | 9  |[7]   [3, 4, 5, 6, 7]
//step 7  8  | 9  |[8]   [3, 4, 5, 6, 7, 8]
//step 8  9  | 9  |      [3, 4, 5, 6, 7, 8] //return

// x + 1 // y stays the same
// x value goes into array
// stop when x === y return array

// range(2-5)
//	 ||
// range(2,4).concat(4) > [3].concat(4) > [3,4]
//   ||
// range(2,3).concat(3) > [3]
//   || 
//    [].concat(3) 


var range = function(x, y) {

    if(y - x === 1 || x - y === 1) {
    	return [];
    }

	if (x === y ) {
		return [];
	}
   	if (x < y){
   		// console.log("y- before: ", y)
		y = y-1
		// console.log("y- after: ", y)
		return range(x,y).concat(y)
    }

    if (x > y){
    	// console.log("y+ before: ", y)
		y = y+1
		// console.log("y+ after: ", y)
		return range(x,y).concat(y)
    }
};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

//input 2 number (base,exp)
// output number - base multiple as many times as exp tells us
// method - 
// run function until exp is 0 - exp - 1;
// if exp === 0 then result = 1; exponent(2,0)
// 8 x 8 x 8
//exponent(8,3)
//exp = 2 | 8 * exponent(8,2) > 8 * 64 = 512
//                 exp = 1 | 8 * exponent(8,1) > 64
//                                  exp = 0 | 8 * exponent(8, 0) > 8
//                                            8  *      1

// exponent(5, -2) = 1/25
var exponent = function(base, exp) {

	if(exp === 0){
		return 1
	}
    if (exp > 0){
		exp = exp - 1;
		return base * exponent(base,exp)
    }
    if (exp < 0) {
    	exp = (-1 * exp) -1;
		return 1 / (base * exponent(base,exp))
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
// input
// output
// method - multiply it by 2 devide by two and remaider is 0
//if n === 1
// return true
//if n < 1
//return false
//
//16 / 2 = 8
//8 / 2 = 4
//4 / 2 = 2
//2 / 2 = 1

//10 / 2 = 5
//5 / 2 = 2.5
//2.5 / 2 = 1.25
//1.25 / 2 = 0.625
var powerOfTwo = function(n) {

	if(n === 1){
       return true;
	}

	if (n < 1) {
		return false;
	}

	n = n / 2;

	return powerOfTwo(n)


};

// ******************* SECOND SOLUTION **************************** 

// var powerOfTwo = function(n) {
// 	if (n === 1 ){
// 		return true
// 	}
// 	if (n === 0 || n % 2 === 1){
// 		return false
// 	}
// 	return powerOfTwo(n/2)
// };

// 9. Write a function that reverses a string.
//input - string
//out put - string
//method - 
// hello - 
// step 1 | hello | o | 'o'
// step 2 | hell  | l | 'ol'
// step 2 | hel   | l | 'oll'
// step 3 | he    | e | 'olle'
// step 4 | h     | h | 'olleh'
var reverse = function(string) {
	if (string.length === 0){
		return '';
	}

	
	var i = string.length - 1
	// console.log(i)
	var newLetter = string[i]
	// console.log("newLetter: ", newLetter)
	var newString = string.slice(0, -1)
	// console.log("newString: ", newString)

	return newLetter.concat(reverse(newString))
};

// 10. Write a function that determines if a string is a palindrome.
//input - string
//output - true or false
//method - take string compare 1 and last, until reach middel
//(madam)
//m = m
//a = a
// d middle - stop
var palindrome = function(string) {

	string = string.toLowerCase()
	string = string.replace(/ /g,'');

	// console.log(string)

	if(string.length === 0 || string.length === 1){
		return true
	}

	var lastLetter = string.slice(string.length - 1)
	// console.log('lastLetter :', lastLetter)
	var firstLetter = string.slice(0, 1)
	// console.log('firstLetter :', firstLetter)
	var newString = string.slice(0,-1)
	// console.log('newString :', newString)
	var newString = newString.slice(1)
	// console.log('newString :', newString)


	if(firstLetter === lastLetter) {
		return palindrome(newString)

	}else{ 
		return false;
	}



};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
// 5 % 2 = 2 + 2 remainer 1
//17 % 5 = 5 + 5 + 5 remainder 2
//22 % 6 = 6 + 6 + 6 remainder 4
// 5 - 2 = 3
// 3 - 2 = 1

var modulo = function(x, y) {

	if (x === 0 && y === 0){
		return NaN;
	}

	// If y is negative, transform to positive. //  27 % -4  ->   27 % 4
	if (y < 0) { 
		return  modulo( x, -y); 
	}  

	// -27 %  4  -> -(27 % 4)
	if (x < 0) {
		return -modulo(-x,  y); 
	} 

	if (x < y) {
		return x;
	}
	
	x = x - y;
	return modulo(x,y)
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
