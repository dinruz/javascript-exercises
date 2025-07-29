
const convertToCelsius = function(fahr) {
  const celsius = Math.round((fahr - 32) * (5 / 9) * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(cels) {
  const fahrenheit = Math.round(((cels * 9 / 5) + 32) * 10) / 10;

  return fahrenheit;
};

console.log(convertToCelsius(32));   
console.log(convertToFahrenheit(0));   



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
