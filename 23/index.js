const conditionalTest = () => {
    let stdObject = {
         name : "usama",
         fatherName : "asif ali",
         age : 24,
         city : "Faisalabad",
         country : "Pakistan",
    }


  console.log("Is name == 'usama'? I predict True.");
  console.log(stdObject.name === "usama");

  console.log("Is fatherName == 'asif ali'? I predict True.");
  console.log(stdObject.fatherName === "asif ali");

  console.log("Is age  == 24 ? I predict True.");
  console.log(stdObject.age === 24);

  console.log("Is city == 'Faisalabad'? I predict True.");
  console.log(stdObject.city === "Faisalabad");

  console.log("Is country == 'Pakistan '? I predict Ture.");
  console.log(stdObject.country == "Pakistan");

  console.log("Is country == 'canada'? I predict False.");
  console.log(stdObject.fatherName === "canada");

  console.log("Is city == 'lahore'? I predict False.");
  console.log(stdObject.city == "lahore");

  console.log("Is age == '24'? I predict False.");
  console.log(stdObject.fatherName == "24");

  console.log("Is fatherName == 'nawaz'? I predict False.");
  console.log(stdObject.fatherName === "nawaz");

  console.log("Is name == 'ahmad'? I predict False.");
  console.log(stdObject.fatherName == "ahmad");
};
conditionalTest();
