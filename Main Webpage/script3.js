let Btn = document.getElementById("convert");

Btn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    convertWeather();
});

function convertWeather() {
    let input = document.getElementById("weatherInput").value;
    let fahrenheit = parseFloat(input);

    if (!isNaN(fahrenheit)) {
        let celsius = toCelsius(fahrenheit);
        let kelvin = toKelvin(celsius);

        console.log(fahrenheit + " in Celsius is " + celsius);
      
        document.getElementById("fahrenpara").innerHTML = fahrenheit + " fahrenheit in Celsius is " + celsius.toFixed(2) +" Celsius.";
        document.getElementById("celsiuspara").innerHTML = celsius.toFixed(2) + " Celsius in Kelvin is " + kelvin.toFixed(2)+ " Kelvin.";
    } else {
        document.getElementById("fahrenpara").innerHTML = "Please input a number";
        document.getElementById("celsiuspara").innerHTML = "";
    }
}

function toCelsius(x) {
    let celsius = (x - 32) * (5/9);
    return celsius;
}

function toKelvin(celsius) {
    let kelvin = celsius + 273.15;
    return kelvin;
}
