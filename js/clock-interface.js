var Clock = require('./../js/clock.js').clockModule;
var Weather = require('./../js/weather.js').weatherModule;
var apiKey = require('./../.env').apiKey;
var alarmset = [];
var kelvin = function(city, fahrenheit, celcius, humid){
  $('#feh').prepend(fahrenheit + "°F");
  $('#cel').prepend(celcius + "°C");
  $('.showWeather').text('The city you have chosen is ' + city + " the humidity is " + humid + "% ");
};
$(document).ready(function(){
  $('#weather-location'). click(function(){
    var city = $("#location").val();
    $('#location').val("");
    var weather = new Weather();
    weather.getTemps(city, kelvin);
    $("#switchTemps").show();
    });
  var update = function () {
    var now = moment().format('h:mm:ss a');
    var screen = $('#time').text(now);
  };
  $("#switchTemps").click(function(event){
    event.preventDefault();
    $("#cel").toggle();
    $("#feh").toggle();
  });
  $("#alarm").submit(function(event){
    event.preventDefault();
    var newTime = $("#new-time").val() + ":00";
    $("#alarm").hide();
    var now = moment().format('H:mm:ss');
    var rightNow = new Clock(newTime, now);
    alarmset.push(rightNow);
  });
  console.log(alarmset);
  var go =function(){
    var done = alarmset[0].setAlarm();
    if(done !== true){
    }
  };
  setInterval(go, 1000);
  setInterval(update, 1000);
});
