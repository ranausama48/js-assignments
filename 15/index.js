let guests = ["humyon", "mubasher", "hussnain"];
guests.forEach((name) => {
  console.log(`${name} I would like to invite you on dinner  `);
});
console.log(`${guests[2]} cannot make it to the dinner!`);
guests[2] = "Naseeb";

guests.forEach((name) => {
  console.log(`${name} I would like to invite you on dinner  `);
});
