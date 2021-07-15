const calcScreenPreviousValue = document.getElementById("previous-value");
const calcScreenActualValue = document.getElementById("actual-value");

const BUTTONS_NUMBERS = document.querySelectorAll("number"); //all the buttons with number class
const BUTTONS_OPERATORS = document.querySelectorAll("operator"); //all the buttons with operator class

const screen = new Screen(calcScreenPreviousValue, calcScreenActualValue); //display the values

BUTTONS_NUMBERS.forEach(b => {
    boton.addEventListener('click', () => display.addNumber(b.innerHTML));
});

BUTTONS_OPERATORS.forEach(b => {
    boton.addEventListener('click', () => display.compute(b.value))
});
