const apiKey = "9b82d7ff6225bb0de39bb46ba32478b7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")


async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

