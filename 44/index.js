const sandwiches = (...arguments) => {
  console.log("Your sandwich contains:");
  arguments.map((items) => console.log(items));
};
sandwiches("chicken", "cheese", "mayo", "tomato");
sandwiches("egg", "bread", "mayo");
sandwiches("tomato", "garlic");
