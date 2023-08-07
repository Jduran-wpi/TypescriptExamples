function fahrenheit_to_celsius(fahrenheit:number): string {

    let celsius: number = (fahrenheit - 32 ) * (5/9);

    return `${fahrenheit}F = ${celsius}C`;
}

let currentTemp: number = 50;

let tempMessage: string = fahrenheit_to_celsius(currentTemp);

console.log(tempMessage);