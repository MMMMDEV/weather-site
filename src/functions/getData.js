import { format, addDays } from "date-fns";
import { DateTime } from "luxon";

async function getlat(city) {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/geo/1.0/direct?q=" +
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
      "https://api.openweathermap.org/geo/1.0/direct?q=" +
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

    const sunset = DateTime.fromSeconds(
      responseJson.sys.sunrise
    ).toLocaleString({ hour: "2-digit", minute: "2-digit" });

    const data = {
      feelsLike: Math.round(responseJson.main.feels_like),
      humidity: responseJson.main.humidity,
      pressure: responseJson.main.pressure,
      temp: Math.round(responseJson.main.temp),
      tempMax: Math.round(responseJson.main.temp_max),
      tempMin: Math.round(responseJson.main.temp_min),
      main: responseJson.weather[0].main,
      name: responseJson.name,
      Date: format(new Date(), "d"),
      DayText: format(new Date(), "E"),
      sunrise: DateTime.fromSeconds(responseJson.sys.sunrise).toLocaleString({
        hour: "2-digit",
        minute: "2-digit",
      }),
      sunset: DateTime.fromSeconds(responseJson.sys.sunset).toLocaleString({
        hour: "2-digit",
        minute: "2-digit",
      }),
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

    const date = DateTime.fromSeconds(responseJson.list[dayN].dt);

    const data = {
      temp: Math.round(responseJson.list[dayN].main.temp),
      tempMax: Math.round(responseJson.list[dayN].main.temp_max),
      tempMin: Math.round(responseJson.list[dayN].main.temp_min),
      description: responseJson.list[dayN].weather[0].description,
      main: responseJson.list[dayN].weather[0].main,
      name: responseJson.city.name,
      Date: date.toLocaleString({ day: "numeric" }),
      DayText: date.toLocaleString({ weekday: "short" }),
    };
    return data;
  } catch (err) {
    console.log("somehting went wrong", err);
  }
}

export const days = {
  day2: format(addDays(new Date(), 2), "yyyy-MM-dd 00:00:00"),
  day3: format(addDays(new Date(), 3), "yyyy-MM-dd 00:00:00"),
  day4: format(addDays(new Date(), 4), "yyyy-MM-dd 00:00:00"),
  day5: format(addDays(new Date(), 5), "yyyy-MM-dd 00:00:00"),
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

export function getTempUnit(temp) {
  // prettier-ignore
  return Math.round((temp - 32) * 0.5556);
}
