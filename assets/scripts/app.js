const defaultResult = 0;
let currentResult = defaultResult;

function getUserInputNumber(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resulBeforeCalc, calcNumber){
    const numBeforeCalc = `${resulBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, numBeforeCalc);
}

function add() {
    const userInputNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = initialResult + userInputNumber; 
    createAndWriteOutput('+', initialResult, userInputNumber);
}

function subtract(){
    const userInputNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = initialResult - userInputNumber; 
    createAndWriteOutput('-', initialResult, userInputNumber);
}

function multiply(){
    const userInputNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = initialResult * userInputNumber; 
    createAndWriteOutput('*', initialResult, userInputNumber);
}

function divide(){
    const userInputNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = initialResult / userInputNumber; 
    createAndWriteOutput('/', initialResult, userInputNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
