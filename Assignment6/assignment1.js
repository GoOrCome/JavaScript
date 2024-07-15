/* 1. Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call the function before it is declared to demonstrate hoisting. */

console.log(addNumbers(2, 15)); // 17
function addNumbers(num1, num2) {
    return num1 + num2;
}