

let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?zip=10023-6514&units=imperial&APPID=a34a7fd6f1beadb58fbab4a57c448a14";
weatherRequest.open('GET', apiURLstring, true); 
weatherRequest.send();

weatherRequest.onload = function() {
let weatherData = JSON.parse(weatherRequest.responseText);
console.log(weatherData);

document.getElementById('currentTemp3').innerHTML = "-High Temperature: " + weatherData.main.temp_max + "&#176 Fahrenheit"
document.getElementById('currentHumidity3').innerHTML = "-Humidity: " + weatherData.main.humidity + "%";
}