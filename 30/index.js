

const helloAdmin = (userNames) => {
  for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === "admin") {
      console.log(
        `Hello ${userNames[i]} would you like to see a status report?`
      );
    } else {
      console.log(`Hello ${userNames[i]}, thank you for logging in again`);
    }
  }
};
let userNamesArray = ["admin", "ali", "bilal", "umer", "ahmad"];
helloAdmin(userNamesArray);
