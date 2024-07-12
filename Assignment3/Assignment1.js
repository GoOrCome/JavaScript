 // object representing a car details
 const car = {
    Make: "TATA",
    Model: "Scorpio",
    Year: 2024
    };
    // all properties of the car
    function displayCarProperties(car) {
    for (const property in car) {
    console.log(`${property}: ${car[property]}`);
    }
    }
    displayCarProperties(car);