 function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName)
    }
    const exampleObject = { name: "Biswajit", age: 21 };
    console.log(hasProperty(exampleObject, "name")); // this is  true
    console.log(hasProperty(exampleObject, "age")); // this is  true
    console.log(hasProperty(exampleObject, "city")); // this is  false