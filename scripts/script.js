'use strict';
const userMass = document.getElementById('mass');
const planetName = document.getElementById('planet');
const showMessage = document.getElementById('error-message');
const showPlanet = document.getElementById('showPlanet');
const showInfo = document.getElementById('showInfo');
const showCalculate = document.getElementById('calculate-btn');

// Functions
const calculate = function (e) {
  e.preventDefault();
  if (mass.value === '' || mass.value === null) {
    errorMessage('Enter the Mass of object in kg');
  } else if (planetName.value === 'unknown' || planetName.value === null) {
    errorMessage('Choose the planet');
  } else if (mass.value <= 0) {
    errorMessage('Mass should be positive and above 0');
  } else {
    showOutput(mass.value, planetName.value);
  }
};

const errorMessage = function (message) {
  showMessage.style.display = 'block';
  showMessage.style.alignItems = 'center';
  showMessage.innerHTML = `<h3 style="text-align:center">${message} </h3>`;
};

const showOutput = function (mass, planet) {
  let massCalculated = 0;
  if (planet === 'earth') {
    massCalculated = mass * 1;
  } else if (planet === 'jupiter') {
    massCalculated = mass * 2.34;
  } else if (planet === 'mars') {
    massCalculated = mass * 0.38;
  } else if (planet === 'mercury') {
    massCalculated = mass * 0.38;
  } else if (planet === 'moon') {
    massCalculated = mass * 0.166;
  } else if (planet === 'neptune') {
    massCalculated = mass * 1.19;
  } else if (planet === 'pluto') {
    massCalculated = mass * 0.06;
  } else if (planet === 'saturn') {
    massCalculated = mass * 1.06;
  } else if (planet === 'uranus') {
    massCalculated = mass * 0.92;
  } else if (planet === 'venus') {
    massCalculated = mass * 0.91;
  }

  let result = massCalculated.toFixed(2);
  showPlanet.innerHTML = `<img src="./assests/images/${planet}.png" alt="">`;
  showInfo.innerHTML = `<h2>The weight of an object on <p style="font-weight:900; text-transform: uppercase;" >${planet}</p></h2><span><h1>${result}kg</h1></span>`;
};

// Event listeners
showCalculate.addEventListener('click', calculate);
