/*Phoenix WeatherMap: https://api.openweathermap.org/data/2.5/weather?zip=85310&units=imperial&APPID=a34a7fd6f1beadb58fbab4a57c448a14*/

let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?zip=85310&units=imperial&APPID=a34a7fd6f1beadb58fbab4a57c448a14";
weatherRequest.open('GET', apiURLstring, true); 
weatherRequest.send();

weatherRequest.onload = function() {
let weatherData = JSON.parse(weatherRequest.responseText);
console.log(weatherData);

document.getElementById('currentTemp2').innerHTML = weatherData.main.temp_max;
document.getElementById('currentHumidity2').innerHTML = weatherData.main.humidity;
document.getElementById('currentWindSpeed2').innerHTML = weatherData.wind.speed;
}