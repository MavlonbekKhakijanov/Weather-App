const inputEl = document.querySelector("#input");
const formEl = document.querySelector("#form");
const gradusEl = document.querySelector("#deg");
const weatherTitle = document.querySelector("#weather__title");
const cityName = document.querySelector("#city__name");
const countryName = document.querySelector("#country__name");

const upData = (data) => {
  cityName.textContent = data.name;
  countryName.textContent = data.sys.country;
  weatherTitle.textContent = data.weather[0].main;
  gradusEl.textContent = Math.floor(data.main.temp);
};

// get weather
const getWeather = async (city) => {
  const data = await getData(city);
  return data;
};

// get location
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityName = inputEl.value;
  formEl.reset();
  getWeather(cityName).then((data) => {
    upData(data);
  });
});
