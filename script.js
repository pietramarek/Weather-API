import { API_KEY } from "./API_Key.js";

const cityName = document.getElementById("city");
const container = document.querySelector(".container");
const image = document.querySelector(".image");
const wind = document.getElementById("wind");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const pressure = document.getElementById("preasure");
const bialystok = document.getElementById("bialystok");
const warszawa = document.getElementById("warszawa");
const londyn = document.getElementById("londyn");

// domyślne przyciski miast
bialystok.addEventListener("click", () => {
  cityName.value = "Białystok";
});
warszawa.addEventListener("click", () => {
  cityName.value = "Warszawa";
});
londyn.addEventListener("click", () => {
  cityName.value = "Londyn";
});
//--------------

document.getElementById("btn").addEventListener("click", async () => {
  container.style.display = "block";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&lang=pl&units=metric&appid=${API_KEY}`
    );

    const data = await response.json();
    //console.log(data);

    weather.innerHTML = data.weather[0].description;
    temp.innerHTML = "Temperatura: " + Math.round(data.main.temp) + "°C";
    wind.innerHTML = "Prędkość wiatru: " + data.wind.speed + "m/s";
    pressure.innerHTML = "Ciśnienie: " + data.main.pressure + " hPa";
    image.style.display = "block";

    if (data.weather[0].description === "bezchmurnie") {
      image.src = "images/sunny.png";
    } else if (
      data.weather[0].description === "zachmurzenie duże" ||
      data.weather[0].description == "pochmurnie"
    ) {
      image.src = "images/cloudy.png";
    } else if (
      data.weather[0].description == "zachmurzenie umiarkowane" ||
      data.weather[0].description == "zachmurzenie małe" ||
      data.weather[0].description == "zachmurzenie duże"
    ) {
      image.src = "images/partlycloudy.png";
    } else if (
      data.weather[0].description == "słabe opady deszczu" ||
      data.weather[0].description == "umiarkowane opady deszczu" ||
      data.weather[0].description == "mocne opady deszczu"
    ) {
      image.src = "images/rainy.png";
    } else image.style.display = "none";
  } catch (error) {
    container.style.display = "none";
    image.style.display = "none";
  }
});
