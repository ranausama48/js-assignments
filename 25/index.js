const alienColorSuccessTest = () => {
  let alien_color = "green";
  if (alien_color === "green") {
    console.log("the player just earned 5 points");
  } else {
    return;
  }
};

const alienColorFailTest = () => {
  let alien_color = "red";
  if (alien_color === "green") {
    console.log("the player just earned 5 points");
  } else {
    return;
  }
};

alienColorSuccessTest();
alienColorFailTest();
