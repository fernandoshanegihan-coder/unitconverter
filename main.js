const length_input = document.getElementById("length-input");
const length_output = document.getElementById("length-output");

const mass_input = document.getElementById("mass-input");
const mass_output = document.getElementById("mass-output");

const currency_input = document.getElementById("currency-input");
const currency_output = document.getElementById("currency-output");

// The function now takes the elements and handles the calculation and output update
function converting(inputElement, x, outputElement) {
    let value = parseFloat(inputElement.value);
    
    // If the input is empty or invalid, clear the output
    if (isNaN(value)) {
        outputElement.value = "";
    } else {
        outputElement.value = value * x;
    }
}

// Using traditional anonymous functions for the event listeners
length_input.addEventListener("input", function() {
    converting(length_input, 3.28, length_output);
});

mass_input.addEventListener("input", function() {
    converting(mass_input, 2.20, mass_output); // Example multiplier for mass
});

currency_input.addEventListener("input", function() {
    converting(currency_input, 0.85, currency_output); // Example multiplier for currency
});

