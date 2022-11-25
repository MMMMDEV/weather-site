async function getlat(city) {
  try {
    const response = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        city +
        "&limit=5&appid=65b4f2531fb54aa7d25841b15aca82ff"
    );
    const responseJson = await response.json();
    return responseJson[0].lat;
  } catch (err) {
    console.log(err);
  }
}

async function getlon(city) {
  try {
    const response = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        city +
        "&limit=5&appid=65b4f2531fb54aa7d25841b15aca82ff"
    );
    const responseJson = await response.json();
    return responseJson[0].lon;
  } catch (err) {
    console.log(err);
  }
}

export async function latLon(city) {
  try {
    const location = {
      lat: await getlat(city),
      lon: await getlon(city),
    };

    return location;
  } catch (err) {
    console.log(err);
  }
}

export async function getData(lat, lon) {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=65b4f2531fb54aa7d25841b15aca82ff&units=imperial"
    );
    const responseJson = await response.json();

    let day = 0;

    const data = {
      feelsLike: responseJson.list[day].main.feels_like,
      humidity: responseJson.list[day].main.humidity,
      pressure: responseJson.list[day].main.pressure,
      temp: responseJson.list[day].main.temp,
      tempMax: responseJson.list[day].main.temp_max,
      tempMin: responseJson.list[day].main.temp_min,
      visibility: responseJson.list[day].visibility,
      description: responseJson.list[day].weather[0].description,
      main: responseJson.list[day].weather[0].main,
      wind: responseJson.list[day].wind.speed,
      name: responseJson.city.name,
    };

    return data;
  } catch (err) {
    console.log(err);
  }
}
