const cars = (manufacturer, model_name, ...arguments) => {
  let carProperties = {
    manufacturer,
    model_name,
    color: arguments[0],
    optional_feature: arguments[1],
  };
  return carProperties;
};

let carObjectsValues = cars(
  "BMW",
  "5 Series",
  (color = "black"),
  (optional_feature = "hybrid")
);
console.log(carObjectsValues);
