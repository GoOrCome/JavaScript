const AllUser=["Ram","Sam","Biswajit","Tatai","Papai","Krishna","Abdul","Sita"];

function CheckUser(user) {
  if (AllUser.includes(user)) {
    console.log(`Yes, ${user} is a valid user.`);
    return true; 
  } else{
    console.log(`No, ${user} is not a valid user.`);
    return true; 
  }
  
}

CheckUser("Ram");
// OUTPUT: Yes, Ram is a valid user.

CheckUser("HariRam");
// OUTPUT: No, HariRam is not a valid user.