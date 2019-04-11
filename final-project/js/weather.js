/*Phoenix WeatherMap: https://api.openweathermap.org/data/2.5/weather?zip=85310&units=imperial&APPID=a34a7fd6f1beadb58fbab4a57c448a14*/

let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?zip=85310&units=imperial&APPID=a34a7fd6f1beadb58fbab4a57c448a14";
weatherRequest.open('GET', apiURLstring, true); 
weatherRequest.send();

weatherRequest.onload = function() {
let weatherData = JSON.parse(weatherRequest.responseText);
console.log(weatherData);

document.getElementById('currentTemp').innerHTML = "-High Temperature: " + weatherData.main.temp_max + "&#176 Fahrenheit"
document.getElementById('currentHumidity').innerHTML = "-Humidity: " + weatherData.main.humidity + "%";

}

/*LA WeatherMap: https://api.openweathermap.org/data/2.5/weather?zip=90025&units=imperial&APPID=a34a7fd6f1beadb58fbab4a57c448a14*/

let laRequest = new XMLHttpRequest();
let laURLstring = "https://api.openweathermap.org/data/2.5/weather?zip=90025&units=imperial&APPID=a34a7fd6f1beadb58fbab4a57c448a14";
laRequest.open('GET', laURLstring, true); 
laRequest.send();

laRequest.onload = function() {
let weatherData = JSON.parse(laRequest.responseText);
console.log(weatherData);

document.getElementById('laTemp').innerHTML = "-High Temperature: " + weatherData.main.temp_max + "&#176 Fahrenheit";
document.getElementById('laHumidity').innerHTML = "-Humidity: " + weatherData.main.humidity + "%";
}

/*Manhattan WeatherMap: https://api.openweathermap.org/data/2.5/weather?zip=10023&units=imperial&APPID=a34a7fd6f1beadb58fbab4a57c448a14*/


let manRequest = new XMLHttpRequest();
let manURLstring = "https://api.openweathermap.org/data/2.5/weather?zip=90025&units=imperial&APPID=a34a7fd6f1beadb58fbab4a57c448a14";
manRequest.open('GET', manURLstring, true); 
manRequest.send();

manRequest.onload = function() {
let weatherData = JSON.parse(manRequest.responseText);
console.log(weatherData);

document.getElementById('manTemp').innerHTML = "-High Temperature: " + weatherData.main.temp_max + "&#176 Fahrenheit";
document.getElementById('manHumidity').innerHTML = "-Humidity: " + weatherData.main.humidity + "%";
}

/*Columbia WeatherMap: https://api.openweathermap.org/data/2.5/weather?zip=29061&units=imperial&APPID=a34a7fd6f1beadb58fbab4a57c448a14*/

let colRequest = new XMLHttpRequest();
let colURLstring = "https://api.openweathermap.org/data/2.5/weather?zip=29061&units=imperial&APPID=a34a7fd6f1beadb58fbab4a57c448a14";
colRequest.open('GET', colURLstring, true); 
colRequest.send();

colRequest.onload = function() {
let weatherData = JSON.parse(colRequest.responseText);
console.log(weatherData);

document.getElementById('colTemp').innerHTML = "-High Temperature: " + weatherData.main.temp_max + "&#176 Fahrenheit";
document.getElementById('colHumidity').innerHTML = "-Humidity: " + weatherData.main.humidity + "%";
}
