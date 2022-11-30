import {
  days,
  getData,
  getDays,
  getTempUnit,
  getTodayData,
  latLon,
} from "./getData";

import cloudimg from "../images/wolf-zimmermann-6sf5rf8QYFE-unsplash.jpg";
import sunimg from "../images/noah-dustin-von-weissenfluh-DJwpx9FpVQ4-unsplash.jpg";
import waterimg from "../images/philipp-pilz-orzc5mDgqP8-unsplash.jpg";
import mistimg from "../images/marita-kavelashvili-ugnrXk1129g-unsplash.jpg";
import cloudspng from "../images/clouds.png";
import sunpng from "../images/sun.png";
import rainpng from "../images/rain.png";
import fogpng from "../images/fog.png";
import searchpng from "../images/search.png";

// imgs
const imgBackground1 = new Image();
imgBackground1.src = cloudimg;
imgBackground1.classList.add("imgBackground");

const imgBackground2 = new Image();
imgBackground2.src = sunimg;
imgBackground2.classList.add("imgBackground");

const imgBackground3 = new Image();
imgBackground3.src = waterimg;
imgBackground3.classList.add("imgBackground");

const imgBackground4 = new Image();
imgBackground4.src = mistimg;
imgBackground4.classList.add("imgBackground");

const iconWeatherTop1 = new Image();
iconWeatherTop1.src = cloudspng;
iconWeatherTop1.classList.add("iconWeatherTop");

const iconWeatherTop2 = new Image();
iconWeatherTop2.src = sunpng;
iconWeatherTop2.classList.add("iconWeatherTop");

const iconWeatherTop3 = new Image();
iconWeatherTop3.src = rainpng;
iconWeatherTop3.classList.add("iconWeatherTop");

const iconWeatherTop4 = new Image();
iconWeatherTop4.src = fogpng;
iconWeatherTop4.classList.add("iconWeatherTop");

const iconSearch = new Image();
iconSearch.src = searchpng;
iconSearch.classList.add("iconSearch");

const iconDay101 = new Image();
iconDay101.src = cloudspng;
iconDay101.classList.add("iconDay");
iconDay101.classList.add("iconDay101");

const iconDay102 = new Image();
iconDay102.src = sunpng;
iconDay102.classList.add("iconDay");
iconDay102.classList.add("iconDay102");

const iconDay103 = new Image();
iconDay103.src = rainpng;
iconDay103.classList.add("iconDay");
iconDay103.classList.add("iconDay103");

const iconDay104 = new Image();
iconDay104.src = fogpng;
iconDay104.classList.add("iconDay");
iconDay104.classList.add("iconDay104");

const iconDay201 = new Image();
iconDay201.src = cloudspng;
iconDay201.classList.add("iconDay");
iconDay201.classList.add("iconDay201");

const iconDay202 = new Image();
iconDay202.src = sunpng;
iconDay202.classList.add("iconDay");
iconDay202.classList.add("iconDay202");

const iconDay203 = new Image();
iconDay203.src = rainpng;
iconDay203.classList.add("iconDay");
iconDay203.classList.add("iconDay203");

const iconDay204 = new Image();
iconDay204.src = fogpng;
iconDay204.classList.add("iconDay");
iconDay204.classList.add("iconDay204");

const iconDay301 = new Image();
iconDay301.src = cloudspng;
iconDay301.classList.add("iconDay");

const iconDay302 = new Image();
iconDay302.src = sunpng;
iconDay302.classList.add("iconDay");

const iconDay303 = new Image();
iconDay303.src = rainpng;
iconDay303.classList.add("iconDay");

const iconDay304 = new Image();
iconDay304.src = fogpng;
iconDay304.classList.add("iconDay");

const iconDay401 = new Image();
iconDay401.src = cloudspng;
iconDay401.classList.add("iconDay");

const iconDay402 = new Image();
iconDay402.src = sunpng;
iconDay402.classList.add("iconDay");

const iconDay403 = new Image();
iconDay403.src = rainpng;
iconDay403.classList.add("iconDay");

const iconDay404 = new Image();
iconDay404.src = fogpng;
iconDay404.classList.add("iconDay");

const iconDay501 = new Image();
iconDay501.src = cloudspng;
iconDay501.classList.add("iconDay");

const iconDay502 = new Image();
iconDay502.src = sunpng;
iconDay502.classList.add("iconDay");

const iconDay503 = new Image();
iconDay503.src = rainpng;
iconDay503.classList.add("iconDay");

const iconDay504 = new Image();
iconDay504.src = fogpng;
iconDay504.classList.add("iconDay");

// top DOM
const top = document.querySelector(".top");
const cityName = document.querySelector("#cityName");
const temperatureDiv = document.querySelector("#temperatureDiv");
const temperature = document.querySelector("#temperature");
const temperatureSign = document.querySelector("#temperatureSign");
const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");

// bottom DOM
const leftDay101 = document.querySelector("#leftDay101");
const date101 = document.querySelector("#date101");
const dayLetter101 = document.querySelector("#dayLetter101");
const tempH101 = document.querySelector("#tempH101");
const tempL101 = document.querySelector("#tempL101");

const leftDay201 = document.querySelector("#leftDay201");
const date201 = document.querySelector("#date201");
const dayLetter201 = document.querySelector("#dayLetter201");
const tempH201 = document.querySelector("#tempH201");
const tempL201 = document.querySelector("#tempL201");

const leftDay301 = document.querySelector("#leftDay301");
const date301 = document.querySelector("#date301");
const dayLetter301 = document.querySelector("#dayLetter301");
const tempH301 = document.querySelector("#tempH301");
const tempL301 = document.querySelector("#tempL301");

const leftDay401 = document.querySelector("#leftDay401");
const date401 = document.querySelector("#date401");
const dayLetter401 = document.querySelector("#dayLetter401");
const tempH401 = document.querySelector("#tempH401");
const tempL401 = document.querySelector("#tempL401");

const leftDay501 = document.querySelector("#leftDay501");
const date501 = document.querySelector("#date501");
const dayLetter501 = document.querySelector("#dayLetter501");
const tempH501 = document.querySelector("#tempH501");
const tempL501 = document.querySelector("#tempL501");

// info section

const feelsLike = document.querySelector("#feelsLikeP");
const sky = document.querySelector("#skyP");
const sunrise = document.querySelector("#sunriseP");
const sunset = document.querySelector("#sunsetP");
const humidity = document.querySelector("#humidityP");
const pressure = document.querySelector("#pressureP");

// appending imgs
top.insertAdjacentElement("afterbegin", imgBackground1);
top.insertAdjacentElement("afterbegin", imgBackground2);
top.insertAdjacentElement("afterbegin", imgBackground3);
top.insertAdjacentElement("afterbegin", imgBackground4);
temperatureDiv.insertAdjacentElement("afterbegin", iconWeatherTop1);
temperatureDiv.insertAdjacentElement("afterbegin", iconWeatherTop2);
temperatureDiv.insertAdjacentElement("afterbegin", iconWeatherTop3);
temperatureDiv.insertAdjacentElement("afterbegin", iconWeatherTop4);
searchBtn.insertAdjacentElement("afterbegin", iconSearch);
leftDay101.insertAdjacentElement("afterbegin", iconDay101);
leftDay101.insertAdjacentElement("afterbegin", iconDay102);
leftDay101.insertAdjacentElement("afterbegin", iconDay103);
leftDay101.insertAdjacentElement("afterbegin", iconDay104);
leftDay201.insertAdjacentElement("afterbegin", iconDay201);
leftDay201.insertAdjacentElement("afterbegin", iconDay202);
leftDay201.insertAdjacentElement("afterbegin", iconDay203);
leftDay201.insertAdjacentElement("afterbegin", iconDay204);
leftDay301.insertAdjacentElement("afterbegin", iconDay301);
leftDay301.insertAdjacentElement("afterbegin", iconDay302);
leftDay301.insertAdjacentElement("afterbegin", iconDay303);
leftDay301.insertAdjacentElement("afterbegin", iconDay304);
leftDay401.insertAdjacentElement("afterbegin", iconDay401);
leftDay401.insertAdjacentElement("afterbegin", iconDay402);
leftDay401.insertAdjacentElement("afterbegin", iconDay403);
leftDay401.insertAdjacentElement("afterbegin", iconDay404);
leftDay501.insertAdjacentElement("afterbegin", iconDay501);
leftDay501.insertAdjacentElement("afterbegin", iconDay502);
leftDay501.insertAdjacentElement("afterbegin", iconDay503);
leftDay501.insertAdjacentElement("afterbegin", iconDay504);

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
