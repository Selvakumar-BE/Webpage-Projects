let intervalId = null;      
function start() {
  let inputValue = document.getElementById('timerinput').value;
  if (!isNaN(inputValue) && inputValue > 0) { 
    intervalId = setInterval(function() {
      inputValue--;
      let hours = Math.floor(inputValue / 3600);
      let minutes = Math.floor((inputValue % 3600) / 60);
      let seconds = inputValue % 60;
      let formattedTime = hours.toString().padStart(2, "0") + ":" +
                          minutes.toString().padStart(2, "0") + ":" +
                          seconds.toString().padStart(2, "0");
      document.getElementById('timer').innerHTML = formattedTime;
      if (inputValue === 0) {
        clearInterval(intervalId);
        alert("Timer finished!");
      }
    }, 1000); 
  } else {
    alert("Please enter a valid number of seconds!");
  }
}

function stop() {
  if (intervalId) {
    clearInterval(intervalId);
  }
}

function reset() {
  clearInterval(intervalId); 
  document.getElementById('timer').innerHTML = "00:00:00";
  document.getElementById('timerinput').value = ""; 
}
