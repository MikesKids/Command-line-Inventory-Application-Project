const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { create, index, show, update, destroy } = require("./src/carController");

const inform = console.log;

function run() {
  const action = process.argv[2];

  let cars = readJSONFile("./data", "cars.json");
  let writeToFile = false;
  let updatedCars = [];
  switch (action) {
    case "index":
      const carsView = index(cars);
      inform(carsView);
      break;
    case "create":
      const car = process.argv[3];
      const model = process.argv[4];
      const cost = process.argv[5];
      updatedCars = create(cars, car, model, cost);
      writeToFile = true;
      break;
    case "show":
      const car = process.argv[3];
      const carShow = show(cars, car);
      inform(carShow);
      break;
    case "update":
      const carId = process.argv[3];
      const brand = process.argv[4];
      const model = process.argv[5];
      const stock = process.argv[6];
      updatedCars = update(cars, carId, brand, model, stock);
      writeToFile = true;
      break;
    case "destroy":
      const carId = process.argv[3];
      updatedCars = destroy(cars, carId);
      writeToFile = true;
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
