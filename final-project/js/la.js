let laRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?zip=90025&units=imperial&APPID=a34a7fd6f1beadb58fbab4a57c448a14";
laRequest.open('GET', apiURLstring, true); 
larRequest.send();

laRequest.onload = function() {
let weatherData = JSON.parse(laRequest.responseText);
console.log(weatherData);

document.getElementById('laTemp').innerHTML = "-High Temperature: " + weatherData.main.temp_max + "&#176 Fahrenheit";
document.getElementById('laHumidity').innerHTML = "-Humidity: " + weatherData.main.humidity + "%";
}