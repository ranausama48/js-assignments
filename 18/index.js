const world = ["Turkey", "Paris", "Switzerland", "Italy", "USA"];

console.log(world);
const sortedArray = [...world].sort((a, b) =>  a.localeCompare(b));
console.log(sortedArray);
console.log(world);
let sortedArrayReverse = [...sortedArray].reverse();
console.log(sortedArrayReverse)
console.log(world);
let reverseTheOrignalArray = [...world].reverse()
console.log(reverseTheOrignalArray)
let reverseTheOrignalArrayAgain = [...reverseTheOrignalArray].reverse()
console.log(reverseTheOrignalArrayAgain)
const sortedOrignalArray = [...reverseTheOrignalArrayAgain].sort((a, b) =>  a.localeCompare(b));
console.log(sortedOrignalArray)
const sortedOrignalArrayReverse = [...sortedOrignalArray].sort((a, b) =>  b.localeCompare(a));
console.log(sortedOrignalArrayReverse)

