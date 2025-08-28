function showTime() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  document.querySelector("#clock").textContent = formattedTime;
}

function pad(n) {
  return n < 10 ? '0' + n : n;
}


setInterval(showTime,1000);