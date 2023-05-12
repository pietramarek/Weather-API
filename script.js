import { API_KEY } from "./API_Key.js";

const cityName = document.getElementById("city");
const result = document.getElementById("result");

document.getElementById("btn").addEventListener("click", async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${API_KEY}&lang=pl&units=metric`
    );
    const data = await response.json();
    console.log(data);

    document.getElementById("city").innerHTML = data;
    document.getElementById("weather").innerHTML = data.weather[0].description;
    document.getElementById("temp").innerHTML = data.main.temp;
    document.getElementById("cloud").innerHTML = data.weather[0].main;
    document.getElementById("wind").innerHTML = data.wind.speed;
  } catch (error) {
    console.error(error);
  }
});
