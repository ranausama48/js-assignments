let nameString = "usama asif";
console.log(nameString === "usama"); //false
console.log(nameString === "usama asif"); //true

let city = "Lahore";
console.log(city !== "Lahore"); //false
console.log(city !== "faisalabad"); //true

console.log(city.toLowerCase() !== "Lahore"); //true
console.log(city.toLowerCase() !== "lahore"); //false

let totalMarks = 33;
if (totalMarks === 33) {
  console.log("you got passing marks");
} else if (totalMarks > 33) {
  console.log("you are above passing marks ");
} else if (totalMarks < 33) {
  console.log("you are fail");
} else if (totalMarks >= 70) {
  console.log("you got A Grad");
} else if (totalMarks >= 80) {
  console.log("you got A+ Grad");
} else if (totalMarks <= 65) {
  console.log("you got B Grad");
}

let age = 70;

if (age > 65 || age === 65) {
  console.log("the person is an elder");
} else if (age >= 20 && age <= 65) {
  console.log("that the person is an adult.");
}
