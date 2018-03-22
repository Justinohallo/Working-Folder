var numbers= [];
/* Here, I am creating the variable "Numbers", which will act as an array.
I have left the array empty by not incuding any Values inside of the []*/

for (var i = 0; i <10; i++) {
	numbers.push(i);
}
/* The for loop will run until the specifics in the equation are complete. 
In this instance, a local variable, i, was created and the loop is expected to
run 9 times ( i < 10 is forcing the program to run one less time than 10). 
The i variable will be increased by a value of 1 until the program has run 9 times.

I then used the "Push Function", to add the value of i after each iteration to the 
Numbers array. Due to the nature of the for loop, this will add 10 numbers to the 
array as we start at 0 and run until 9. */

console.log(numbers[0]);

/* Console.log will be called upon in the terminal, using Node assignment-1.js
This will prompt the first number in the array, which is 0, to be displayed. */
console.log(numbers[9]);
/* Console.log will be called upon in the terminal, using Node assignment-1.js
This will prompt the 10th and final number in the array, which is 9, to be displayed. */

var car = {};

/* Here, I am creating the empty Object known as Car. It currently has no properties. */

car.colour= "blank";

/* Here, I am declaring that the Object Car has a Colour property of "blank".*/

