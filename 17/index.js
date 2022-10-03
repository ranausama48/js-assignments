let guests = ["humyon", "mubasher", "hussnain"];
guests.unshift("Naseeb");
guests.push("talha");
guests.splice(2, 0, "rehan");

console.log(
  "Hey guys, looks like the dinner table won't arrive in time for dinner. only two peoples are invite for dinner.",
  guests
);

for (let i = 0; i <= guests.length; i++) {
  if (guests.length === 2) {
    break;
  } else {
    console.log(`${guests.pop()} i can't invite you `);
  }
}

guests.forEach((name) => {
  console.log(`${name} you are still invited `);
});
guests.splice(guests.length - 2, 2);
console.log(guests);
