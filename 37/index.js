const make_shirt = (size = "large", text = "I love JavaScript") => {
  console.log(
    `Size of my shirt is ${size} and ${text} should be printed on shirt`
  );
};

make_shirt();
make_shirt("medium");
make_shirt("any", "Hello Usama");
