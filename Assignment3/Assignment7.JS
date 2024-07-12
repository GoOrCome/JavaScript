// Program using a Map to store user information
const userMap = new Map();
function addUser(name, age, email) {
const userInfo = { age, email };
userMap.set(name, userInfo);
}
function updateUser(name, age, email) {
if (userMap.has(name)) {
const userInfo = userMap.get(name);
userInfo.age = age;
userInfo.email = email;
}
}
function deleteUser(name) {
userMap.delete(name);
}
addUser("Biswajit", 21, "biswajit@example.com");
addUser("Subhadip", 19, "subhadip@example.com");
console.log(userMap);
updateUser("Biswajit", 23, "newemail@example.com");
console.log(userMap);
deleteUser("Subhadip");
console.log(userMap);