// Function to sum two numbers
const sum = (a, b) => {
    return a + b;
}

// Conversion rates
const conversionRates = {
    "JPY": 156.5, // Japanese Yen
    "USD": 1.07, // US Dollar
    "GBP": 0.87 // British Pound
};

// Function to convert from Euro to Dollar
const fromEuroToDollar = function(valueInEuro) {
    const valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

// Function to convert from Dollar to Yen
const fromDollartoYen = (amountInDollars) => {
    const amountInEuros = amountInDollars / conversionRates.USD;
    return amountInEuros * conversionRates.JPY;
}

// Function to convert from Yen to Pound
const fromYentoPound = (amountInYen) => {
    const amountInEuros = amountInYen / conversionRates.JPY;
    return amountInEuros * conversionRates.GBP;
}

module.exports = { sum, fromEuroToDollar, fromDollartoYen, fromYentoPound };

