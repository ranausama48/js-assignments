let animalsList = ["dog","lion","cat"];
const animals = (animalsArray) => {
  for (let i = 0; i < animalsArray.length; i++) {
    console.log(`A ${animalsArray[i]} would make a great pet.`)
  }
  console.log("Any of these animals would make a great pet!")
}

animals(animalsList)
