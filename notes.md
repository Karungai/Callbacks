Challenge:
Create a function called sumAsync that takes in two numbers and a callback function. The function should add the two numbers together and then call the callback function with the result after a random delay between 1 and 5 seconds.

Instructions:
The sumAsync function should take three parameters: num1, num2, and callback.
Inside the sumAsync function, add num1 and num2 together and store the result in a variable called result.
Generate a random delay between 1 and 5 seconds using the setTimeout function. Pass a callback function to setTimeout that will call the callback function with the result variable as its argument.
Test your sumAsync function by calling it with two numbers and a callback that logs the result to the console.
Hint:
Remember that JavaScript is single-threaded and uses an event loop to handle asynchronous code. The setTimeout function is an example of a function that allows code to run asynchronously by scheduling it to run after a certain amount of time has passed. The callback function that you pass to setTimeout will be added to the event loop and executed after the specified delay has elapsed