/* 5. Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.*/

{
    console.log(x); // throws ReferenceError
    let x = "My Name is Biswajit";
    console.log(x); // "My Name is Biswajit"
    }