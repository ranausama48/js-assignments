const show_magicians = (magicianNames) => {
  magicianNames.map((name) => console.log(name));
};
const make_great = (magicianArray) => {
  let modifiedArray = magicianArray.map((name) => `The Great ${name}`);
  return modifiedArray;
};

let magicianArray = ["ali", "ahmad", "umer", "hamza"];
console.log(make_great(magicianArray));
show_magicians(magicianArray);
