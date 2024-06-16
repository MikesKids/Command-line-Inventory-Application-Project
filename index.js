const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { create, index, show } = require("./src/carController");

const inform = console.log;

function run() {
  const action = process.argv[2];
  const car = process.argv[3];
  const model = process.argv[4];
  const cost = process.argv[5];
  let cars = readJSONFile("./data", "cars.json");
  let writeToFile = false;
  let updatedCars = [];
  switch (action) {
    case "index":
      const carsView = index(cars);
      inform(carsView);
      break;
    case "create":
      updatedCars = create(cars, car, model, cost);
      writeToFile = true;
      break;
    case "show":
      inform(cars, car);
      break;
    case "update":
      const carShow = show(cars, car);
      inform(carShow);
      break;
    case "destroy":
      inform(action, car);
      break;
    default:
      inform("There was an error with this model");
  }
  if (writeToFile) {
    writeJSONFile("./data", "cars.json", updatedCars);
  }
}
run();

module.exports = { run };
