function create(cars, carName) {
  const car = { name: carName };
  cars.push(car);
  return cars;
}
