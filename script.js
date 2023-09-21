let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        alert("Erro na expressão!");
        clearDisplay();
    }
}

function calculateSquareRoot() {
    const number = parseFloat(displayValue);
    if (!isNaN(number)) {
        displayValue = Math.sqrt(number);
        document.getElementById("display").value = displayValue;
    }
}

function calculateSquare() {
    const number = parseFloat(displayValue);
    if (!isNaN(number)) {
        displayValue = Math.pow(number, 2);
        document.getElementById("display").value = displayValue;
    }
}
