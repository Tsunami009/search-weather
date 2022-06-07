function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let Humidity = document.querySelector("#humidity");
  Humidity.innerHTML = response.data.main.humidity;
  let description = document.querySelector("#describe");
  description.innerHTML = response.data.weather[0].description;
  let time = document.querySelector("#current-time");
  time.innerHTML = formatDate(response.data.dt * 1000);
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    "https://openweathermap.org/img/wn/${response.data.weathe[0].icon}@2x.png"
  );
}
let apiKey = "60cf85a4c7dd6acab0cc7acb0029d770";
let city = "tokyo";
let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);

