//Display Day and time
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let h4 = document.querySelector("h4");
h4.innerHTML = `Last updated on: ${day} ${hour}:${minute}`;

//Hour

let currentHour = document.querySelector("#now");
currentHour.innerHTML = [(hour + 0) % 24];
let oneHours = document.querySelector("#oneHour");
oneHours.innerHTML = [(hour + 1) % 24];
let twoHours = document.querySelector("#twoHours");
twoHours.innerHTML = [(hour + 2) % 24];
let threeHours = document.querySelector("#threeHours");
threeHours.innerHTML = [(hour + 3) % 24];
let fourHours = document.querySelector("#fourHours");
fourHours.innerHTML = [(hour + 4) % 24];
let fiveHours = document.querySelector("#fiveHours");
fiveHours.innerHTML = [(hour + 5) % 24];

//Days
let today = now.getDay();
let tomorrow = document.querySelector("#tomorrow");
tomorrow.innerHTML = days[(today + 1) % 7];
let twoDays = document.querySelector("#twoDays");
twoDays.innerHTML = days[(today + 2) % 7];
let threeDays = document.querySelector("#threeDays");
threeDays.innerHTML = days[(today + 3) % 7];
let fourDays = document.querySelector("#fourDays");
fourDays.innerHTML = days[(today + 4) % 7];
let fiveDays = document.querySelector("#fiveDays");
fiveDays.innerHTML = days[(today + 5) % 7];
//Search for a city
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  console.log(searchInput.value);
  let h1 = document.querySelector("#city");

  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    h1.innerHTML = null;
    alert("Please type a city");
  }
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//show temperature
function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}`;
  let overallIcon = document.querySelector("#overall-icon");
  overallIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let nowIcon = document.querySelector("#now-icon");
  nowIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let nowTemp = document.querySelector("#tempNow");
  nowTemp.innerHTML = `${temperature} °C`;
  celsiusTemperature = response.data.main.temp;
}

//show details
function showDetails(response) {
  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#Wind");
  windElement.innerHTML = `${wind} km/h`;
  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#Humidity");
  humidityElement.innerHTML = `${humidity} %`;
  let minTemperature = Math.round(response.data.main.temp_min);
  let minTemperatureElement = document.querySelector("#MinTemperature");
  minTemperatureElement.innerHTML = `${minTemperature} °C`;
  let maxTemperature = Math.round(response.data.main.temp_max);
  let maxTemperatureElement = document.querySelector("#MaxTemperature");
  maxTemperatureElement.innerHTML = `${maxTemperature} °C`;
  let feltTemperature = Math.round(response.data.main.feels_like);
  let feltTemperatureElement = document.querySelector("#FeltTemperature");
  feltTemperatureElement.innerHTML = `${feltTemperature} °C`;
  let description = response.data.weather[0].description;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = `${description}`;
}

//search the data
function searchTemp(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input");
  let selectedCity = document.querySelector("#city");
  selectedCity.innerHTML = city.value;
  let apiKey = "c524de42a382642a117a494851a42046";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchTemp);

function searchDetails(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input");
  let selectedCity = document.querySelector("#city");
  selectedCity.innerHTML = city.value;
  let apiKey = "c524de42a382642a117a494851a42046";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showDetails);
}

let searchForm2 = document.querySelector("#search-form");
searchForm2.addEventListener("submit", searchDetails);

//button current location

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let currentLocation = document.querySelector("#city");
  currentLocation.innerHTML = `Your latitude is ${lat.value}`;
  let apiKey = "c524de42a382642a117a494851a42046";
  let apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
  axios.get(`${apiUrl2}&appid=${apiKey}`).then(showTempForCurrentLocation);
}
function showTempForCurrentLocation(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}`;
  let selectedCity = document.querySelector("#city");
  selectedCity.innerHTML = city.value;
  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#Wind");
  windElement.innerHTML = `${wind} km/h`;
  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#Humidity");
  humidityElement.innerHTML = `${humidity} %`;
  let minTemperature = Math.round(response.data.main.temp_min);
  let minTemperatureElement = document.querySelector("#MinTemperature");
  minTemperatureElement.innerHTML = `${minTemperature} °C`;
  let maxTemperature = Math.round(response.data.main.temp_max);
  let maxTemperatureElement = document.querySelector("#MaxTemperature");
  maxTemperatureElement.innerHTML = `${maxTemperature} °C`;
  let feltTemperature = Math.round(response.data.main.feels_like);
  let feltTemperatureElement = document.querySelector("#FeltTemperature");
  feltTemperatureElement.innerHTML = `${feltTemperature} °C`;
  let description = response.data.weather[0].description;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = `${description}`;
  celsiusTemperature = response.data.main.temp;
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

//Change to Celsius
//function showCelsius(event) {
//event.preventDefault();
//let celsius = document.querySelector("h2");
//celsius.innerHTML = "19";
//}
//let displaycelsius = document.querySelector("#Celsius");
//displaycelsius.addEventListener("click", showCelsius);

//Change to Fahrenheid
function showFahrenheit(event) {
  event.preventDefault();
  let fahrenheit = document.querySelector("#temperature");
  displaycelsius.classList.remove("active");
  displayfahrenheid.classList.add("active");
  let fahrenheitElement = (celsiusTemperature * 9) / 5 + 32;
  fahrenheit.innerHTML = Math.round(fahrenheitElement);
}
let displayfahrenheid = document.querySelector("#fahrenheitUnit");
displayfahrenheid.addEventListener("click", showFahrenheit);

//Change to Celsius
function showCelsius(event) {
  event.preventDefault();
  let celsius = document.querySelector("#temperature");
  displaycelsius.classList.add("active");
  displayfahrenheid.classList.remove("active");
  celsius.innerHTML = Math.round(celsiusTemperature);
}
let displaycelsius = document.querySelector("#celsiusUnit");
displaycelsius.addEventListener("click", showCelsius);

let celsiusTemperature = null;

//Search for hourly temperature
//function showHourlyTemp(response) {
//let temperatureNow = Math.round(response.data.main.temp);
//let temperatureNowElement = document.querySelector("#tempNow");
//temperatureNowElement.innerHTML = `${temperatureNow} °C`;
//}
//function searchHourlyTemp(position) {
//let lat = position.coords.latitude;
//let lon = position.coords.longitude;
//let currentLocation = document.querySelector("#city");
//currentLocation.innerHTML = `Your latitude is ${lat.value}`;
//let apiKey = "c524de42a382642a117a494851a42046";
//let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}`;
//axios.get(`${apiUrl}&appid=${apiKey}`).then(showHourlyTemp);

//let searchForm3 = document.querySelector("#search-form");
//searchForm3.addEventListener("submit", searchHourlyTemp);
