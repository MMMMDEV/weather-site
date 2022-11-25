import { getData, latLon } from "./getData";

const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const iconWeatherTop1 = document.querySelector("#iconWeatherTop1");
const iconWeatherTop2 = document.querySelector("#iconWeatherTop2");
const iconWeatherTop3 = document.querySelector("#iconWeatherTop3");
const imgBackground1 = document.querySelector("#imgBackground1");
const imgBackground2 = document.querySelector("#imgBackground2");
const imgBackground3 = document.querySelector("#imgBackground3");
const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");

function runIconImg(data) {
  switch (data.main) {
    case "Clouds":
      iconWeatherTop1.classList.add("iconActive");
      iconWeatherTop2.classList.remove("iconActive");
      iconWeatherTop3.classList.remove("iconActive");

      imgBackground1.classList.add("imgActive");
      imgBackground2.classList.remove("imgActive");
      imgBackground3.classList.remove("imgActive");
      break;
    case "Clear":
      iconWeatherTop2.classList.add("iconActive");
      iconWeatherTop1.classList.remove("iconActive");
      iconWeatherTop3.classList.remove("iconActive");

      imgBackground2.classList.add("imgActive");
      imgBackground1.classList.remove("imgActive");
      imgBackground3.classList.remove("imgActive");
      break;
    case "Rain":
      iconWeatherTop3.classList.add("iconActive");
      iconWeatherTop2.classList.remove("iconActive");
      iconWeatherTop1.classList.remove("iconActive");

      imgBackground3.classList.add("imgActive");
      imgBackground1.classList.remove("imgActive");
      imgBackground2.classList.remove("imgActive");
      break;
  }
}

function runCityInput() {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let cityValue = cityInput.value;
    cityInput.value = "";
    display(latLon(cityValue));
  });
}

async function display(data) {
  try {
    const response = await data;
    const dataResponse = await getData(response.lat, response.lon);

    cityName.textContent = dataResponse.name;
    temperature.textContent = dataResponse.temp;

    runIconImg(dataResponse);
  } catch (err) {
    console.log(err);
  }
}

runCityInput();

export { display };
