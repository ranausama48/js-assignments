const alienColorTest = (color) => {
    let alien_color = color;
    if (alien_color === "green") {
      console.log("the player just earned 5 points for shooting the alien");
    } else {
      console.log("the player just earned 10 points.");
    }
  };
  
  alienColorTest("green");
  alienColorTest("red");
  