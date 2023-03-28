const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButtons = document.getElementById("data-equals");
const displayField = document.getElementById("display");
const dataClear = document.getElementById("data-clear");
const pointBtn =  document.getElementById("data-point");
const minplusBtn =  document.getElementById("data-minplus");

var firstOperator;
var secondOperator; 
var waitSecondoperator = false;
var operation;



numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (displayField.value == "0") {      
        displayField.value="";
     }

    if (!(waitSecondoperator)) {
        const value = button.value;
        displayField.value += value;
        firstOperator = value;
    }
else {
    const value = button.value;
    displayField.value += value;
    secondOperator = value;
}   
  });
});
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    firstOperator = displayField.value;
    operation = button.value;
    displayField.value='0';
    waitSecondoperator = true;
  });
})

dataClear.addEventListener('click', ()=> {
    displayField.value='0';
})

equalsButtons.addEventListener('click', ()=> {
    secondOperator = displayField.value;
    displayField.value = eval(firstOperator+ ' '+ operation + ' ' + secondOperator);
})

pointBtn.addEventListener('click', () => {
    if (displayField.value.includes(".")) {
        return;
    } 
    else { 
        displayField.value+= "."; }
}) 

minplusBtn.addEventListener('click', () => {
    let currentvalue = parseFloat(displayField.value);
    if (currentvalue > 0 ) {
        currentvalue *= -1;
    } 
    else if ( currentvalue < 0) { 
        currentvalue *= -1;}
        displayField.value = currentvalue;
})







































/*const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) return;

    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand)  {
        calculator.operator = nextOperator;
        return;
    }

    if (firstOperand == null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const currentValue = firstOperand || 0;
        const result = performCalculation[operator](currentValue, inputValue);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

    '=': (firstOperand, secondOperand) => secondOperand
};

function updateDisplay() {
    const display = document.querySelector('#display');
    display.value = calculator.displayValue;
}

updateDisplay();


const keys = document.querySelector('#calculator');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
}); */
