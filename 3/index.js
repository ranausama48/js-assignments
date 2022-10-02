let name = "usama asif";
const toTittleCase = (name) => {
  let nameArray = name.toLowerCase().split("");
  for (let i = 0; i < nameArray.length; i++) {
    nameArray[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);
  }
  return nameArray.join(" ");
};
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(toTittleCase(name));
