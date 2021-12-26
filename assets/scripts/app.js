const defaultResult = 0;

let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    alert(result);
}

add(1, 3);
add(5, 5);

currentResult = (currentResult + 10) * 9 / 4 - 1;

// let calculationDescription = '(' + defaultResult + ' + 10) * 9 / 4 - 1';
// You can use the backticks and the dolar sign and the curly brackets to inject the value of a variable in a String 👍
let calculationDescription = `(${defaultResult} + 10) * 9 / 4 - 1`;


outputResult(currentResult, calculationDescription);