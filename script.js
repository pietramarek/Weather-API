import { API_KEY } from "./API_Key.js";

const cityName = document.getElementById("city");
const result = document.getElementById("result");
const container = document.querySelector(".container");

document.getElementById("btn").addEventListener("click", async () => {
  container.style.display = "block";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&lang=pl&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);

    document.getElementById("weather").innerHTML = data.weather[0].description;
    document.getElementById("temp").innerHTML =
      "Temperatura: " + Math.round(data.main.temp) + "°C";
    document.getElementById("wind").innerHTML =
      "Wind speed: " + data.wind.speed;
  } catch (error) {
    console.error(error);
  }
});

const bialystok = document
  .getElementById("bialystok")
  .addEventListener("click", () => {
    cityName.value = "Białystok";
  });
const warszawa = document
  .getElementById("warszawa")
  .addEventListener("click", () => {
    cityName.value = "Warszawa";
  });
const londyn = document
  .getElementById("londyn")
  .addEventListener("click", () => {
    cityName.value = "Londyn";
  });
