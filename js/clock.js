function Clock(time, now){
  this.time = time;
  this.now = now;
}


Clock.prototype.setAlarm = function(){
    var now = moment().format('H:mm:ss');
  if (this.time === now){
    alert("Alarm!");
    return true;
  };
};
exports.clockModule = Clock;
