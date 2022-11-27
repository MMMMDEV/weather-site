import { format, addDays } from "date-fns";

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

export async function getTodayData(lat, lon) {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=65b4f2531fb54aa7d25841b15aca82ff&units=imperial"
    );
    const responseJson = await response.json();

    const data = {
      feelsLike: responseJson.main.feels_like,
      humidity: responseJson.main.humidity,
      pressure: responseJson.main.pressure,
      temp: responseJson.main.temp,
      tempMax: responseJson.main.temp_max,
      tempMin: responseJson.main.temp_min,
      visibility: responseJson.visibility,
      description: responseJson.weather[0].description,
      main: responseJson.weather[0].main,
      wind: responseJson.wind.speed,
      name: responseJson.name,
      Date: format(new Date(), "d"),
      DayText: format(new Date(), "E"),
    };

    return data;
  } catch (err) {
    console.log("somehting went wrong", err);
  }
}

export async function getData(lat, lon, dayN) {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=65b4f2531fb54aa7d25841b15aca82ff&units=imperial"
    );
    const responseJson = await response.json();

    const data = {
      feelsLike: responseJson.list[dayN].main.feels_like,
      humidity: responseJson.list[dayN].main.humidity,
      pressure: responseJson.list[dayN].main.pressure,
      temp: responseJson.list[dayN].main.temp,
      tempMax: responseJson.list[dayN].main.temp_max,
      tempMin: responseJson.list[dayN].main.temp_min,
      visibility: responseJson.list[dayN].visibility,
      description: responseJson.list[dayN].weather[0].description,
      main: responseJson.list[dayN].weather[0].main,
      wind: responseJson.list[dayN].wind.speed,
      name: responseJson.city.name,
      Date: format(new Date(responseJson.list[dayN].dt_txt), "d"),
      DayText: format(new Date(responseJson.list[dayN].dt_txt), "E"),
    };
    return data;
  } catch (err) {
    console.log("somehting went wrong", err);
  }
}

export const days = {
  day3: format(addDays(new Date(), 2), "yyyy-MM-dd 00:00:00"),
  day4: format(addDays(new Date(), 3), "yyyy-MM-dd 00:00:00"),
  day5: format(addDays(new Date(), 4), "yyyy-MM-dd 00:00:00"),
  day6: format(addDays(new Date(), 5), "yyyy-MM-dd 00:00:00"),
  day7: format(addDays(new Date(), 6), "yyyy-MM-dd 00:00:00"),
};

export async function getDays(data, dayN) {
  try {
    const response = await data;
    const responseData = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        response.lat +
        "&lon=" +
        response.lon +
        "&appid=65b4f2531fb54aa7d25841b15aca82ff&units=imperial"
    );

    const responseJson = await responseData.json();

    for (let i = 0; i <= 39; i++) {
      if (responseJson.list[i].dt_txt === dayN) {
        return i;
      }
    }
  } catch {
    console.log("Day Not Found");
  }
}
