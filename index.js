const calcScreenPreviousValue = document.getElementById("previous-value");
const calcScreenActualValue = document.getElementById("actual-value");

const BUTTONS_NUMBERS = document.querySelectorAll("number");
const BUTTONS_OPERATORS = document.querySelectorAll("operator");

const screen = new Screen(calcScreenPreviousValue, calcScreenActualValue);

BUTTONS_NUMBERS.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});
