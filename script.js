const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clear = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");
const percents = document.querySelector(".percent");

const inputNumber = function (number) {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";
let hasil = "";

const upadateScreen = function (number) {
  calculatorScreen.value = number;
};

const inputOperator = function (operator) {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "";
};

const inputPercent = (percent) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber /= 100;
  }
};
const inputDecimal = function (decimal) {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += decimal;
};

const calculate = function () {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseInt(prevNumber) + parseInt(currentNumber);

      break;
    case "-":
      result = parseInt(prevNumber) - parseInt(currentNumber);
      break;
    case "*":
      result = parseInt(prevNumber) * parseInt(currentNumber);
      break;
    case "/":
      result = parseInt(prevNumber) / parseInt(currentNumber);
      break;
    case "%":
      hasil = parseFloat(prevNumber);
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};

equalSign.addEventListener("click", function (e) {
  calculate();
  upadateScreen(currentNumber);
});

numbers.forEach((number) => {
  number.addEventListener("click", function (e) {
    inputNumber(e.target.value);
    upadateScreen(currentNumber);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", function (e) {
    inputOperator(e.target.value);
  });
});

const clearAll = function () {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

clear.addEventListener("click", () => {
  clearAll();
  upadateScreen(currentNumber);
});

decimal.addEventListener("click", (e) => {
  inputDecimal(e.target.value);
  upadateScreen(currentNumber);
});
percents.addEventListener("click", (e) => {
  inputPercent(e.target.value);
  upadateScreen(hasil);
});
