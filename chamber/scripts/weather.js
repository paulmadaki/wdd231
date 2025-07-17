// scripts/weather.js

const apiKey = "2b593680ca30a34a1ecf836101820d2e";  // API key
const lat = 7.2;     // Example latitude for Otukpo
const lon = 8.13;    // Example longitude for Otukpo
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function fetchWeather() {
  try {
    const response = await fetch(weatherURL);
    const data = await response.json();

    const currentTemp = Math.round(data.list[0].main.temp);
    const weatherDesc = data.list[0].weather[0].description;

    document.getElementById("current-temp").textContent = currentTemp;
    document.getElementById("weather-desc").textContent = weatherDesc;

    const forecastEl = document.getElementById("forecast");
    forecastEl.innerHTML = "";

    // Get forecast every 24 hours from now
    const daily = [8, 16, 24]; // 3 days (indices in 3-hour data blocks)
    daily.forEach(i => {
      const dayData = data.list[i];
      const date = new Date(dayData.dt_txt);
      const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
      const temp = Math.round(dayData.main.temp);
      const desc = dayData.weather[0].description;

      const forecastCard = document.createElement("div");
      forecastCard.classList.add("forecast-day");
      forecastCard.innerHTML = `<strong>${dayName}</strong>: ${temp}°C - ${desc}`;
      forecastEl.appendChild(forecastCard);
    });

  } catch (err) {
    console.error("Weather fetch failed:", err);
  }
}

fetchWeather();
