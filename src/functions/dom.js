import {
  days,
  getData,
  getDays,
  getTempUnit,
  getTodayData,
  latLon,
} from "./getData";

// top DOM
const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const temperatureSign = document.querySelector("#temperatureSign");
const iconWeatherTop1 = document.querySelector("#iconWeatherTop1");
const iconWeatherTop2 = document.querySelector("#iconWeatherTop2");
const iconWeatherTop3 = document.querySelector("#iconWeatherTop3");
const iconWeatherTop4 = document.querySelector("#iconWeatherTop4");
const imgBackground1 = document.querySelector("#imgBackground1");
const imgBackground2 = document.querySelector("#imgBackground2");
const imgBackground3 = document.querySelector("#imgBackground3");
const imgBackground4 = document.querySelector("#imgBackground4");
const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");

// bottom DOM
const date101 = document.querySelector("#date101");
const dayLetter101 = document.querySelector("#dayLetter101");
const iconDay101 = document.querySelector("#iconDay101");
const iconDay102 = document.querySelector("#iconDay102");
const iconDay103 = document.querySelector("#iconDay103");
const iconDay104 = document.querySelector("#iconDay104");
const tempH101 = document.querySelector("#tempH101");
const tempL101 = document.querySelector("#tempL101");

const date201 = document.querySelector("#date201");
const dayLetter201 = document.querySelector("#dayLetter201");
const iconDay201 = document.querySelector("#iconDay201");
const iconDay202 = document.querySelector("#iconDay202");
const iconDay203 = document.querySelector("#iconDay203");
const iconDay204 = document.querySelector("#iconDay204");
const tempH201 = document.querySelector("#tempH201");
const tempL201 = document.querySelector("#tempL201");

const date301 = document.querySelector("#date301");
const dayLetter301 = document.querySelector("#dayLetter301");
const iconDay301 = document.querySelector("#iconDay301");
const iconDay302 = document.querySelector("#iconDay302");
const iconDay303 = document.querySelector("#iconDay303");
const iconDay304 = document.querySelector("#iconDay304");
const tempH301 = document.querySelector("#tempH301");
const tempL301 = document.querySelector("#tempL301");

const date401 = document.querySelector("#date401");
const dayLetter401 = document.querySelector("#dayLetter401");
const iconDay401 = document.querySelector("#iconDay401");
const iconDay402 = document.querySelector("#iconDay402");
const iconDay403 = document.querySelector("#iconDay403");
const iconDay404 = document.querySelector("#iconDay404");
const tempH401 = document.querySelector("#tempH401");
const tempL401 = document.querySelector("#tempL401");

const date501 = document.querySelector("#date501");
const dayLetter501 = document.querySelector("#dayLetter501");
const iconDay501 = document.querySelector("#iconDay501");
const iconDay502 = document.querySelector("#iconDay502");
const iconDay503 = document.querySelector("#iconDay503");
const iconDay504 = document.querySelector("#iconDay504");
const tempH501 = document.querySelector("#tempH501");
const tempL501 = document.querySelector("#tempL501");

// info section

const feelsLike = document.querySelector("#feelsLikeP");
const sky = document.querySelector("#skyP");
const sunrise = document.querySelector("#sunriseP");
const sunset = document.querySelector("#sunsetP");
const humidity = document.querySelector("#humidityP");
const pressure = document.querySelector("#pressureP");

function runIconImg(data) {
  switch (data.main) {
    case "Clouds":
      iconWeatherTop1.classList.add("iconActive");
      iconWeatherTop2.classList.remove("iconActive");
      iconWeatherTop3.classList.remove("iconActive");
      iconWeatherTop4.classList.remove("iconActive");

      imgBackground1.classList.add("imgActive");
      imgBackground2.classList.remove("imgActive");
      imgBackground3.classList.remove("imgActive");
      imgBackground4.classList.remove("imgActive");
      break;
    case "Clear":
      iconWeatherTop2.classList.add("iconActive");
      iconWeatherTop1.classList.remove("iconActive");
      iconWeatherTop3.classList.remove("iconActive");
      iconWeatherTop4.classList.remove("iconActive");

      imgBackground2.classList.add("imgActive");
      imgBackground1.classList.remove("imgActive");
      imgBackground3.classList.remove("imgActive");
      imgBackground4.classList.remove("imgActive");
      break;
    case "Rain":
      iconWeatherTop3.classList.add("iconActive");
      iconWeatherTop2.classList.remove("iconActive");
      iconWeatherTop1.classList.remove("iconActive");
      iconWeatherTop4.classList.remove("iconActive");

      imgBackground3.classList.add("imgActive");
      imgBackground1.classList.remove("imgActive");
      imgBackground2.classList.remove("imgActive");
      imgBackground4.classList.remove("imgActive");
      break;

    case "Mist":
      iconWeatherTop4.classList.add("iconActive");
      iconWeatherTop1.classList.remove("iconActive");
      iconWeatherTop2.classList.remove("iconActive");
      iconWeatherTop3.classList.remove("iconActive");

      imgBackground4.classList.add("imgActive");
      imgBackground1.classList.remove("imgActive");
      imgBackground2.classList.remove("imgActive");
      imgBackground3.classList.remove("imgActive");
      break;
  }
}

let TempType = true;

function daysIcons(data, icon1, icon2, icon3, icon4) {
  switch (data.main) {
    case "Clouds":
      icon1.classList.add("iconDayActive");
      icon2.classList.remove("iconDayActive");
      icon3.classList.remove("iconDayActive");
      icon4.classList.remove("iconDayActive");

      break;
    case "Clear":
      icon2.classList.add("iconDayActive");
      icon1.classList.remove("iconDayActive");
      icon3.classList.remove("iconDayActive");
      icon4.classList.remove("iconDayActive");

      break;
    case "Rain":
      icon3.classList.add("iconDayActive");
      icon2.classList.remove("iconDayActive");
      icon1.classList.remove("iconDayActive");
      icon4.classList.remove("iconDayActive");

      break;

    case "Mist":
      icon4.classList.add("iconDayActive");
      icon1.classList.remove("iconDayActive");
      icon2.classList.remove("iconDayActive");
      icon3.classList.remove("iconDayActive");

      break;
  }
}

function runCityInput() {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let cityValue = cityInput.value;
    cityInput.value = "";
    displayTop(latLon(cityValue));
    displayBottom(latLon(cityValue));
  });
}

async function displayTop(data) {
  try {
    const response = await data;
    const dataResponse = await getTodayData(response.lat, response.lon);

    cityName.textContent = dataResponse.name;
    temperature.textContent = dataResponse.temp;

    let Celsius = getTempUnit(dataResponse.temp);

    temperatureSign.addEventListener("click", (e) => {
      if (TempType === true) {
        temperature.textContent = Celsius;
        temperatureSign.textContent = "°C";
      } else {
        temperature.textContent = dataResponse.temp;
        temperatureSign.textContent = "°F";
      }
    });

    runIconImg(dataResponse);
  } catch (err) {
    console.log(err);
  }
}

async function displayBottom(data) {
  try {
    const response = await data;
    const dataResponseDay1 = await getTodayData(response.lat, response.lon, 0);
    const dataResponseDay2 = await getData(
      response.lat,
      response.lon,
      await getDays(response, days.day2)
    );
    const dataResponseDay3 = await getData(
      response.lat,
      response.lon,
      await getDays(response, days.day3)
    );
    const dataResponseDay4 = await getData(
      response.lat,
      response.lon,
      await getDays(response, days.day4)
    );
    const dataResponseDay5 = await getData(
      response.lat,
      response.lon,
      await getDays(response, days.day5)
    );

    // day1
    date101.textContent = dataResponseDay1.Date;
    dayLetter101.textContent = "Today";
    tempH101.textContent = dataResponseDay1.tempMax + "°";
    tempL101.textContent = dataResponseDay1.tempMin + "°";
    daysIcons(dataResponseDay1, iconDay101, iconDay102, iconDay103, iconDay104);

    feelsLike.textContent = dataResponseDay1.feelsLike + "°";
    sky.textContent = dataResponseDay1.main;
    sunrise.textContent = dataResponseDay1.sunrise;
    sunset.textContent = dataResponseDay1.sunset;
    humidity.textContent = dataResponseDay1.humidity + "%";
    pressure.textContent = dataResponseDay1.pressure + " hPa";

    // day2
    date201.textContent = dataResponseDay2.Date;
    dayLetter201.textContent = "Tomorrow";
    tempH201.textContent = dataResponseDay2.tempMax + "°";
    tempL201.textContent = dataResponseDay2.tempMin + "°";
    daysIcons(dataResponseDay2, iconDay201, iconDay202, iconDay203, iconDay204);

    // day 3
    date301.textContent = dataResponseDay3.Date;
    dayLetter301.textContent = dataResponseDay3.DayText;
    tempH301.textContent = dataResponseDay3.tempMax + "°";
    tempL301.textContent = dataResponseDay3.tempMin + "°";
    daysIcons(dataResponseDay3, iconDay301, iconDay302, iconDay303, iconDay304);

    // day 4
    date401.textContent = dataResponseDay4.Date;
    dayLetter401.textContent = dataResponseDay4.DayText;
    tempH401.textContent = dataResponseDay4.tempMax + "°";
    tempL401.textContent = dataResponseDay4.tempMin + "°";
    daysIcons(dataResponseDay4, iconDay401, iconDay402, iconDay403, iconDay404);

    // day5
    date501.textContent = dataResponseDay5.Date;
    dayLetter501.textContent = dataResponseDay5.DayText;
    tempH501.textContent = dataResponseDay5.tempMax + "°";
    tempL501.textContent = dataResponseDay5.tempMin + "°";
    daysIcons(dataResponseDay5, iconDay501, iconDay502, iconDay503, iconDay504);

    let Celsius1 = getTempUnit(dataResponseDay1.tempMax);
    let Celsius2 = getTempUnit(dataResponseDay2.tempMax);
    let Celsius3 = getTempUnit(dataResponseDay3.tempMax);
    let Celsius4 = getTempUnit(dataResponseDay4.tempMax);
    let Celsius5 = getTempUnit(dataResponseDay5.tempMax);
    let Celsius6 = getTempUnit(dataResponseDay1.tempMin);
    let Celsius7 = getTempUnit(dataResponseDay2.tempMin);
    let Celsius8 = getTempUnit(dataResponseDay3.tempMin);
    let Celsius9 = getTempUnit(dataResponseDay4.tempMin);
    let Celsius10 = getTempUnit(dataResponseDay5.tempMin);
    let Celsius11 = getTempUnit(dataResponseDay1.feelsLike);

    temperatureSign.addEventListener("click", (e) => {
      if (TempType === true) {
        tempH101.textContent = Celsius1 + "°";
        tempH201.textContent = Celsius2 + "°";
        tempH301.textContent = Celsius3 + "°";
        tempH401.textContent = Celsius4 + "°";
        tempH501.textContent = Celsius5 + "°";
        tempL101.textContent = Celsius6 + "°";
        tempL201.textContent = Celsius7 + "°";
        tempL301.textContent = Celsius8 + "°";
        tempL401.textContent = Celsius9 + "°";
        tempL501.textContent = Celsius10 + "°";
        feelsLike.textContent = Celsius11 + "°";
        temperatureSign.textContent = "°C";
      } else {
        tempH101.textContent = dataResponseDay1.tempMax + "°";
        tempH201.textContent = dataResponseDay2.tempMax + "°";
        tempH301.textContent = dataResponseDay3.tempMax + "°";
        tempH401.textContent = dataResponseDay4.tempMax + "°";
        tempH501.textContent = dataResponseDay5.tempMax + "°";
        tempL101.textContent = dataResponseDay1.tempMin + "°";
        tempL201.textContent = dataResponseDay2.tempMin + "°";
        tempL301.textContent = dataResponseDay3.tempMin + "°";
        tempL401.textContent = dataResponseDay4.tempMin + "°";
        tempL501.textContent = dataResponseDay5.tempMin + "°";
        feelsLike.textContent = dataResponseDay1.feelsLike + "°";
        temperatureSign.textContent = "°F";
      }
    });
    temperatureSign.addEventListener("click", (e) => {
      TempType = !TempType;
    });
  } catch (err) {
    console.log(err);
  }
}

runCityInput();

export { displayTop, displayBottom };
