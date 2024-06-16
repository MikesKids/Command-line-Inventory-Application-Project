const { nanoid } = require("nanoid");
const { readJSONFile, writeJSONFile } = require("./helpers");

function create(cars, carName, modelName, priceInCents) {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const car = {
    name: carName,
    model: modelName,
    price: `${USDollar.format(priceInCents)}`,
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
  return `Brand: ${car.name} \n Model: ${car.model} \n Price: ${USDollar.format(
    car.price
  )} \n In Stock: ${car.inStock}`;
}

module.exports = { create, index, show };
