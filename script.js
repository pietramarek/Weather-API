import { API_KEY } from "./API_Key.js";

const cityName = document.getElementById("city");
const container = document.querySelector(".container");
const image = document.querySelector(".image");

// domyślne przyciski miast
document.getElementById("bialystok").addEventListener("click", () => {
  cityName.value = "Białystok";
});
document.getElementById("warszawa").addEventListener("click", () => {
  cityName.value = "Warszawa";
});
document.getElementById("londyn").addEventListener("click", () => {
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
    console.log(data);

    document.getElementById("weather").innerHTML = data.weather[0].description;
    document.getElementById("temp").innerHTML =
      "Temperatura: " + Math.round(data.main.temp) + "°C";
    document.getElementById("wind").innerHTML =
      "Prędkość wiatru: " + data.wind.speed;
    image.style.display = "block";
    if (data.weather[0].description === "bezchmurnie") {
      image.src = "images/sunny.png";
    } else if (data.weather[0].description === "zachmurzenie duże") {
      image.src = "images/cloudy.png";
    } else if (
      data.weather[0].description == "zachmurzenie umiarkowane" ||
      data.weather[0].description == "zachmurzenie małe"
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
    console.error(error);
  }
});
