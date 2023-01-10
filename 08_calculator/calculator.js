const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  total = 0;
  if (arr.length === 0) {
    return 0;
  }
  else{
    for (let i=0; i < arr.length; i++)
    {
      total += arr[i];
    }
  }
  return total;
  } ;

const multiply = function(arr) {
  total = 1;
  for(let i = 0; i < arr.length; i++){
    total *= arr[i];
  }
  return total;
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

// npm test calculator.spec.js 