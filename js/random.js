(function() {
"use strict";

//random function from MDN page
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var randomResult = getRandomIntInclusive(1,2);

//drop it in the log too just for testing
console.log(randomResult);


})();
