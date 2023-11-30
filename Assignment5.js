let type = "overnight";
let time;

let standard = "3-5"
let express = "1-2"
let overnight = "next"

if (type === "standard") {
    time = `standard might take ${standard} days`;
} else if (type === "express") {
    time = `express might take ${express} days`;
} else {
    time = `overnight might take ${overnight} days`;
}
console.log(time);
