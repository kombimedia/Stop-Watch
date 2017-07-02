
var startButton = document.getElementById("start");
var lapButton = document.getElementById("lap");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");
var millis = 00, seconds = 00, minutes = 00, hours = 00;
var counter;

function stopWatch(){
  millis++;
    if (millis > 99){
      millis = 0;
      seconds++;
    if (seconds >= 60){
      seconds = 0;
      minutes++;
      if (minutes >= 60){
        minutes = 0;
        hours++;
      }
      }
    }
    var millisElement = document.getElementById("milli");
    var secondsElement = document.getElementById("second");
    var minutesElement = document.getElementById("minute");
    var hoursElement = document.getElementById("hour");

    millisElement.innerHTML = zeros(millis);
    secondsElement.innerHTML = zeros(seconds) + " :";
    minutesElement.innerHTML = zeros(minutes) + " :";
    hoursElement.innerHTML = zeros(hours) + " :";
}

function zeros(number){
    if (number <= 9){
      return "0" + number;
    }
    return number;
}

startButton.onclick = function(){
  clearInterval(counter);
  counter = window.setInterval(stopWatch, 10);
}

lapButton.onclick = function() {
    var p = document.createElement("p");
    var text = document.createTextNode(zeros(hours) + " : " + zeros(minutes) + " : " + zeros(seconds) + " : " + zeros(millis));
    p.appendChild(text);
    document.getElementById("lap-div").appendChild(p);
}

stopButton.onclick = function() {
    clearInterval(counter);
}

resetButton.onclick = function() {
    clearInterval(counter);
    millis = 00;
    seconds = 00;
    minutes = 00;
    hours = 00;
    document.getElementById("milli").innerHTML = "00";
    document.getElementById("second").innerHTML = "00 :";
    document.getElementById("minute").innerHTML = "00 :";
    document.getElementById("hour").innerHTML = "00 :";
    document.getElementById("lap-div").innerHTML = "";
}



