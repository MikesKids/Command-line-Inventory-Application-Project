const { readJSONFile, writeJSONFile } = require("./src/helpers");

const inform = console.log;

function run() {
  const action = process.argv[2];
  const car = process.argv[3];
  let cars = readJSONFile("./data", "cars.json");
  switch (action) {
    case "index":
      inform(action, cars);
      break;
    case "create":
      inform(action, car);
      break;
    case "show":
      inform(action, car);
      break;
    case "update":
      inform(action, car);
      break;
    case "destroy":
      inform(action, car);
      break;
    default:
      inform("There was an error with this model");
  }
}
run();
