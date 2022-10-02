const alienColorTest = (color) => {
  let alien_color = color;
  if (alien_color === "green") {
    console.log("tthat the player earned 5 points");
  } else if (alien_color === "yellow") {
    console.log("the player earned 10 points.");
  } else if (alien_color === "red") {
    console.log("the player earned 15 points.");
  }
};

alienColorTest("green");
alienColorTest("yellow");
alienColorTest("red");
