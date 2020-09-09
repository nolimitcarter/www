function updateClock() {
    var now = new Date();
	hours = now.getHours();
	minutes = now.getMinutes();
  seconds = now.getSeconds()
  if (seconds < 10) {
    time = hours + ':' + "0" + minutes + ':' + "0" + seconds;
    else {
      time = hours + ':' + minutes + ':' + seconds;
    }
  }
	if (minutes < 10) {
		time = hours + ':' + "0" + minutes;
	} else {
		time = hours + ':' + minutes;
	}
	if (hours < 10) {
		time = "0" + time;
	}
    document.getElementById('time').innerHTML = time;
    setTimeout(updateClock, 1000);
}

updateClock();
