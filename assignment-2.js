var triangle = ''; 

for (var i = 0; i < 7; i++) {
    triangle = triangle + '#';
    console.log(triangle);
}
/** By declaring the variable triangle and giving it the value '' we are creating
a blank string variable to act as an empty carrier. 

Using a for function, with the variable i = 0 and telling the program
to run 7 times, we will create 7 versions of the triangle variable. Within 
the for function, we are creating a local triangle variable, that is calling the
Global triangle Variable to be used within the function. In this instance, 
we are adding the global variable Triangle to the value of Local Triangle Variable, 
plus an additional # string value. 

As the function runs, it will move through its self 7 times, 
adding an additional hash to each in increment. This process will stop
after 7 runs through the function, as once it completes the 6th iteration, it will stop
as the function has declared that it will run until its iteration is less than 7. 

Using the Console.log function with the variable triangle, we will call the 
Triangle Variable in the console, which will display the 7 layer hash tower. */

function isEven(a) {
	if (isNaN (a))
		return "Not a Number";
	else 
		if (a % 2 === 0)
		return "even";
	else 
		return "odd";
	
		}

console.log (isEven(9))




/* 
Using a conditional execution, the program will choose between two different routes based on a boolean value. 
The initial if function will determine if the value being acted on is a number or a string. If the value is not
a number, the console will return "not a number". If the value is a number, the function will move into 
an if statement, using the modulus operator to divide the number by 2 and return the remainder. 



An even number would not return a remainder, therefore the value returned would be 0. In this case, it is true that 
0 is equal to 0, and the console would return the text "even". In the case that the number is odd, 
the modulus operator would return a number that is not zero, which would result in the response being "odd"
 skip the rest of the code and return " */





