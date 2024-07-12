 // Define an object representing a student's information including name, age, and grade
 const student = {
    name: "Biswajit",
    age: 20,
    grade: "A"
    };



    // Method to update the student's Grade
    function updateGrade(newGrade) {
    student.grade = newGrade;
    }


    updateGrade("A+");
    console.log(student);