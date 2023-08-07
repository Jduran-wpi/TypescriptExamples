"use strict";
function fahrenheit_to_celsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    return `${fahrenheit}F = ${celsius}C`;
}
let currentTemp = 50;
let tempMessage = fahrenheit_to_celsius(currentTemp);
console.log(tempMessage);
//# sourceMappingURL=f-to-c.js.map