const { nanoid } = require("nanoid");
const { readJSONFile, writeJSONFile } = require("./helpers");

const inform = console.log;

function create(cars, carName, modelName, priceInCents) {
  const car = {
    name: carName,
    model: modelName,
    price: priceInCents,
    id: nanoid(4),
    inStock: true,
  };
  cars.push(car);
  return cars;
}

function index(cars) {
  return cars.map((car) => car.name + " " + car.model).join("\n");
}

function show(cars, carId) {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const car = cars.find((car) => car.id === carId);

  if (car) {
    return `Brand: ${car.name} \n Model: ${
      car.model
    } \n Price: ${USDollar.format(car.price)} \n In Stock: ${car.inStock}`;
  } else {
    return "Car not found";
  }
}

function update(cars, carId, updatedBrand, updatedModel, updatedStock) {
  const index = cars.findIndex((car) => car.id === carId);
  if (index > -1) {
    cars[index].name = updatedBrand;
    cars[index].model = updatedModel;
    cars[index].inStock = updatedStock;
    inform(`Car successfully updated!`);
    return cars;
  } else {
    inform(`Car ${carId} not found. No action taken`);
    return cars;
  }
}

module.exports = { create, index, show, update };
