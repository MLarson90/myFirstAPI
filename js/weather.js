var apiKey = require('./../.env').apiKey;
function Weather(){
}



Weather.prototype.getTemps = function(city, kelvin){
$.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
  kelvin(city,(response.main.temp * 9/5 - 459.67).toFixed(), (response.main.temp - 273.15).toFixed(),response.main.humidity);
  });

  };
exports.weatherModule = Weather;
