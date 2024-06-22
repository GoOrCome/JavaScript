const students = [
    {
      name: "Biswajit",
      marks: 95,
    },
    {
      name: "Papai",
      marks: 75,
    },
    {
      name: "Alock",
      marks: 92,
    },
    {
      name: "Shuvam",
      marks: 70,
    },
    {
      name: "Fardin",
      marks: 99,
    },
  ];
  
  const checkResults = (name) => {
    for (let student of students) {
      if (student.name === name) {
        if (student.marks > 90) {
          console.log(
            `Congratulations ${student.name}! You have cleared the exam.`
          )
        } else if(student.marks < 90){
          console.log(`Sorry ! You have not cleared the exam.`)
        } return;
      }
    } 
    console.log("Invalid User !!!");
  };
  
  checkResults("Biswajit");
  // OUTPUT: Congratulations Mithun! You have cleared the exam.
  
  checkResults("Papai");
  // OUTPUT: Sorry ! You have not cleared the exam.
  
  checkResults("Biswajit B");
  // OUTPUT: Invalid User !!!
  