const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");
var bgvideo = document.getElementById("bgvid");
var city_text = document.getElementById("city");
let feelslike_text = document.querySelector(".feelslike");
let gps = document.querySelector("#gps-btn");
let gpsErr = document.querySelector("#err-txt");

async function bysearch(city) {
  const key = "8523d60e0418c32de5d3e3f5287ba4f1";
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`;

  let data = await fetch(url);
  let json = await data.json();
  console.log(json);
  const lat = json[0].lat;
  const lon = json[0].lon;
  showData(lat, lon);
}

async function bygps() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("running"); // Location access granted
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        showData(lat, lon);
      },
      () => {
        location_not_found.style.display = "flex";
        gpsErr.innerHTML = "Location access denied";
      }
    );
  }
}

async function showData(lat, lon) {
  const key = "8523d60e0418c32de5d3e3f5287ba4f1";
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
  let weatherData = await fetch(weatherURL);
  let weather_data = await weatherData.json();
  console.log(weather_data);


  if (weather_data.cod === `404`) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }



  feelslike_text.innerHTML = `${Math.round(weather_data.main.temp_min) - 273
  }° / ${Math.round(weather_data.main.temp_max) - 273}° Feels like - ${
    Math.round(weather_data.main.feels_like) - 273
  }°C`;
  city_text.innerHTML = `${weather_data.name}`;
  location_not_found.style.display = "none";
  weather_body.style.display = "flex";
  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


  switch (weather_data.weather[0].main) {
    case "Clouds":
      weather_img.src = "/assets/img/cloud.png";
      bgvideo.src = "/assets/bgvideo/cloudybg.mp4";
      break;
    case "Clear":
      weather_img.src = "/assets/img/clear.png";
      bgvideo.src = "/assets/bgvideo/clearbg.mp4";
      break;
    case "Rain":
      weather_img.src = "/assets/img/rain.png";
      bgvideo.src = "/assets/bgvideo/rainbg.mp4";
      break;
    case "Mist":
      weather_img.src = "/assets/img/mist.png";
      bgvideo.src = "/assets/bgvideo/mistbg.mp4";
      break;
    case "Snow":
      weather_img.src = "/assets/img/snow.png";
      bgvideo.src = "/assets/bgvideo/snowbg.mp4";
      break;
  }
}

searchBtn.addEventListener("click", () => {
  bysearch(inputBox.value);
});

inputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    bysearch(inputBox.value);
  }
});

gps.addEventListener("click", bygps);
