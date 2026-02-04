const apikey = "61a82cee842873b1dc2b686cad9d00c4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button ");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0] == "Clouds") {
      weathericon.src = "image/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "image/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "image/Rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "image/Drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "image/Mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
