let ordinalNumbersPrint = (numbersArray) => {
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] === 1) {
      console.log(`${numbersArray[i]}st`);
    } else if (numbersArray[i] === 2) {
      console.log(`${numbersArray[i]}nd`);
    } else if (numbersArray[i] === 3) {
      console.log(`${numbersArray[i]}rd`);
    } else {
      console.log(`${numbersArray[i]}th`);
    }
  }
};

let NumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinalNumbersPrint(NumbersArray);
