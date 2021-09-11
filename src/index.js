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
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}`;
  let overallIcon = document.querySelector("#overall-icon");
  overallIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  celsiusTemperature = response.data.main.temp;

  getDailyForecast(response.data.coord);
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

function showDailyForecast(response) {
  let nextDayMaxTemp = Math.round(response.data.daily[1].temp.max);
  let nextDayMinTemp = Math.round(response.data.daily[1].temp.min);
  let nextDayElement = document.querySelector("#info-tomorrow");
  let tomorrowIcon = document.querySelector("#tomorrow-icon");
  tomorrowIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`
  );
  nextDayElement.innerHTML = `${nextDayMaxTemp} °C | ${nextDayMinTemp} °C`;

  let twoDaysMaxTemp = Math.round(response.data.daily[2].temp.max);
  let twotDaysMinTemp = Math.round(response.data.daily[2].temp.min);
  let twoDaysElement = document.querySelector("#info-twoDays");
  let twoDaysIcon = document.querySelector("#twoDays-icon");
  twoDaysIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`
  );
  twoDaysElement.innerHTML = `${twoDaysMaxTemp} °C | ${twotDaysMinTemp} °C`;

  let threeDaysMaxTemp = Math.round(response.data.daily[3].temp.max);
  let threeDaysMinTemp = Math.round(response.data.daily[3].temp.min);
  let threeDaysElement = document.querySelector("#info-threeDays");
  let threeDaysIcon = document.querySelector("#threeDays-icon");
  threeDaysIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`
  );
  threeDaysElement.innerHTML = `${threeDaysMaxTemp} °C | ${threeDaysMinTemp} °C`;

  let fourDaysMaxTemp = Math.round(response.data.daily[4].temp.max);
  let fourDaysMinTemp = Math.round(response.data.daily[4].temp.min);
  let fourDaysElement = document.querySelector("#info-fourDays");
  let fourDaysIcon = document.querySelector("#fourDays-icon");
  fourDaysIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`
  );
  fourDaysElement.innerHTML = `${fourDaysMaxTemp} °C | ${fourDaysMinTemp} °C`;

  let fiveDaysMaxTemp = Math.round(response.data.daily[5].temp.max);
  let fiveDaysMinTemp = Math.round(response.data.daily[5].temp.min);
  let fiveDaysElement = document.querySelector("#info-fiveDays");
  let fiveDaysIcon = document.querySelector("#fiveDays-icon");
  fiveDaysIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[5].weather[0].icon}@2x.png`
  );
  fiveDaysElement.innerHTML = `${fiveDaysMaxTemp} °C | ${fiveDaysMinTemp} °C`;
}

function showHourlyForecast(response) {
  let nowHour = Math.round(response.data.hourly[0].temp);
  let nowHourElement = document.querySelector("#tempNow");
  let nowIcon = document.querySelector("#now-icon");
  nowIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.hourly[0].weather[0].icon}@2x.png`
  );
  nowHourElement.innerHTML = `${nowHour} °C`;

  let oneHour = Math.round(response.data.hourly[1].temp);
  let oneHourElement = document.querySelector("#tempOneHour");
  let oneHourIcon = document.querySelector("#oneHour-icon");
  oneHourIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.hourly[1].weather[0].icon}@2x.png`
  );
  oneHourElement.innerHTML = `${oneHour} °C`;

  let twoHour = Math.round(response.data.hourly[2].temp);
  let twoHoursElement = document.querySelector("#tempTwoHours");
  let twoHoursIcon = document.querySelector("#twoHours-icon");
  twoHoursIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.hourly[2].weather[0].icon}@2x.png`
  );
  twoHoursElement.innerHTML = `${twoHour} °C`;

  let threeHour = Math.round(response.data.hourly[3].temp);
  let threeHoursElement = document.querySelector("#tempThreeHours");
  let threeHoursIcon = document.querySelector("#threeHours-icon");
  threeHoursIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.hourly[3].weather[0].icon}@2x.png`
  );
  threeHoursElement.innerHTML = `${threeHour} °C`;

  let fourHour = Math.round(response.data.hourly[4].temp);
  let fourHoursElement = document.querySelector("#tempFourHours");
  let fourHoursIcon = document.querySelector("#fourHours-icon");
  fourHoursIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.hourly[4].weather[0].icon}@2x.png`
  );
  fourHoursElement.innerHTML = `${fourHour} °C`;

  let fiveHour = Math.round(response.data.hourly[5].temp);
  let fiveHoursElement = document.querySelector("#tempFiveHours");
  let fiveHoursIcon = document.querySelector("#fiveHours-icon");
  fiveHoursIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.hourly[5].weather[0].icon}@2x.png`
  );
  fiveHoursElement.innerHTML = `${fiveHour} °C`;
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

function getDailyForecast(coordinates) {
  let apiKey = "c524de42a382642a117a494851a42046";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showDailyForecast);
  axios.get(`${apiUrl}`).then(showHourlyForecast);
}

//button current location

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let currentLocation = document.querySelector(".city");
  currentLocation.innerHTML = `You have been allocated`;
  let apiKey = "c524de42a382642a117a494851a42046";
  let apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
  axios.get(`${apiUrl2}&appid=${apiKey}`).then(showTempForCurrentLocation);
}
function showTempForCurrentLocation(response) {
  console.log(response.data);
  let overallIcon = document.querySelector("#overall-icon");
  overallIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}`;
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

  getDailyForecast(response.data.coord);
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
