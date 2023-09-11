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
const forecast = document.getElementById("forecast");

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
    const response2 = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&cnt=3&appid=${API_KEY}`
    );

    const data2 = await response2.json();
    console.log(data2.list[0].weather[0].description);

    console.log(data2.list[0].dt_txt);
    console.log(data2.list[0].main.temp);
    console.log(data2.list[0].weather[0].description);
    console.log(data2.list[0].weather[0].icon);

    console.log(data2.list[1].dt_txt);
    console.log(data2.list[1].main.temp);
    console.log(data2.list[1].weather[0].description);

    console.log(data2.list[2].dt_txt);
    console.log(data2.list[2].main.temp);
    console.log(data2.list[2].weather[0].description);

    const data = await response.json();
    weather.innerHTML = data.weather[0].description;
    image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    temp.innerHTML = "Temperatura: " + Math.round(data.main.temp) + "°C";
    wind.innerHTML = "Prędkość wiatru: " + data.wind.speed + "m/s";
    pressure.innerHTML = "Ciśnienie: " + data.main.pressure + " hPa";
    image.style.display = "block";
  } catch (error) {
    container.style.display = "none";
    image.style.display = "none";
  }
});
