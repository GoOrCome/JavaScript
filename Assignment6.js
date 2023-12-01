let typeName = "email";
let nameType;

let name = "biswajit";
let email = "biswajit12345@gmail.com";
let age = 21;

if (typeName === "name") {
    nameType = `Name should be a ${typeof name}`;
} else if (typeName === "email") {
    nameType = `Email should be a ${typeof email}`;
} else {
    nameType = `Age should be a ${typeof age}`;
}
console.log(nameType);