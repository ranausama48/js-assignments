
const make_great = (magicianArray) => {
  let modifiedArray = magicianArray.map((name) => `The Great ${name}`);
  return modifiedArray;
};

let magicianArray = ["ali", "ahmad", "umer", "hamza"];
console.log(make_great(magicianArray))
