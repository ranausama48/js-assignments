const describe_city = (cityName, country = "Pakistan") => {
  console.log(`${cityName} is in ${country}`);
};

describe_city("Fisalabad");
describe_city("Lahore");
describe_city("NewYork", "USA");
