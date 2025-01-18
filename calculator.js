// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

// Function to handle calculations
function handleCalculation(operation) {
    // Retrieve the input values
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    // Perform the calculation based on the operation
    let result;
    switch (operation) {
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            result = divide(number1, number2);
            break;
        default:
            result = "Invalid operation";
    }

    // Display the result
    document.getElementById('calculation-result').textContent = result;
}

// Attach event listeners to the buttons
document.getElementById('add').addEventListener('click', () => handleCalculation('add'));
document.getElementById('subtract').addEventListener('click', () => handleCalculation('subtract'));
document.getElementById('multiply').addEventListener('click', () => handleCalculation('multiply'));
document.getElementById('divide').addEventListener('click', () => handleCalculation('divide'));
