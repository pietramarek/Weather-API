const API_KEY="ffdee663130bb47b6b8b4796e39ea0a2";

const cityName = document.getElementById("city");
const result = document.getElementById("result");

document.getElementById("btn").addEventListener("click", async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${API_KEY}`);
        const data = await response.json();
        console.log(data);
        /* const { name } = data;
        const { feels_like } = data.main;
        const { main } = data.weather[0]; */

        document.getElementById("city").innerHTML = data;  
        document.getElementById("weather").innerHTML = data.weather[0].description;  
        document.getElementById("temp").innerHTML = data.main.temp;  
        document.getElementById("cloud").innerHTML = data.weather[0].main;  
        document.getElementById("wind").innerHTML = data.wind.speed;  

       /*  result.innerHTML = `
        <div class="city">${name}</div>
        <div class="temp">${Math.round(feels_like - 273.15)}°C</div>
        <div class="weather">${main}</div>
        `; */
    } catch (error) {
        console.error(error);
    }
});

