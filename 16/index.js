let guests = ["humyon", "mubasher", "hussnain"];
guests.forEach((name) => {
  console.log(`${name} I would like to invite you on dinner  `);
});
console.log(`i got bigger tabel for dinner`);
guests.unshift("Naseeb");
guests.push("talha");
guests.splice(2, 0, "rehan");

console.log("second set of instruction")
guests.forEach((name) => {
  console.log(`${name} I would like to invite you on dinner  `);
});
