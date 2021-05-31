function qWeatherApi(city) {
  const API_key = "2df597d28e291ccbe012e5d4ed331e67";
  const lang = "es";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&units=metric&appid=${API_key}`;
  fetch(URL)
    .then((res) => res.json())
    .then((json) => {
      return {
        country: json.sys.country,
        city: json.name,
        temp: json.main.temp,
        feelsLike: json.main.feels_like,
        minima: json.main.temp_min,
        maxima: json.main.temp_max,
        presion: json.main.pressure,
        humedad: json.main.humidity,
        visibilidad: json.visibility,
        velocidadViento: json.wind.speed,
        direccionViento: json.wind.deg,
        descripcionClima: json.weather[0].description,
      };
    })
    .then((obj) => mostrarResultado(obj));
}

function mostrarResultado(obj) {
  const card = document.querySelector(".card-weather");

  card.querySelector(".card-weather-country").textContent =
    "País: " + obj.country;
  card.querySelector(".card-weather-city").textContent = "Ciudad: " + obj.city;
  card.querySelector(".card-weather-temp").textContent =
    "La temperatura de hoy es:" + obj.temp + "°C";
  card.querySelector(".card-weather-feelsLike").textContent =
    "La sensación termica es de: " + obj.feelsLike + "°C";
  card.querySelector(".card-weather-minima").textContent =
    "La mínima de hoy es de: " + obj.minima + "°C";
  card.querySelector(".card-weather-maxima").textContent =
    "La máxima de hoy es de: " + obj.maxima + "°C";
  card.querySelector(".card-weather-presion").textContent =
    "La presión del viento es de: " + obj.presion + "hPa";
  card.querySelector(".card-weather-humedad").textContent =
    "La humedad es del: " + obj.humedad + "%";
  card.querySelector(".card-weather-visibilidad").textContent =
    "La visibilidad es de: " + obj.visibilidad + "m.";
  card.querySelector(".card-weather-velocidadViento").textContent =
    "El viento corre a: " + obj.velocidadViento + "Km/h";
  card.querySelector(".card-weather-direccionViento").textContent =
    "En dirección: " + obj.direccionViento + "°";
  card.querySelector(".card-weather-descripcionClima").textContent =
    "Hoy el día está: " + obj.descripcionClima;
}

function main() {
  const buscador = document.querySelector(".search-form");

  buscador.addEventListener("submit", (event) => {
    event.preventDefault();
    const queries = event.target.search.value;
    qWeatherApi(queries);
  });
}

main();
