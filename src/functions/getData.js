function runCity() {
  async function getDataDay1(lat, lon) {
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

      let feelsLike = responseJson.list[day].main.feels_like;
      let humidity = responseJson.list[day].main.humidity;
      let pressure = responseJson.list[day].main.pressure;
      let temp = responseJson.list[day].main.temp;
      let tempMax = responseJson.list[day].main.temp_max;
      let tempMin = responseJson.list[day].main.temp_min;
      let visibility = responseJson.list[day].visibility;
      let description = responseJson.list[day].weather[0].description;
      let main = responseJson.list[day].weather[0].main;
      let wind = responseJson.list[day].wind.speed;
    } catch (err) {
      console.log(err);
    }
  }

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

  async function Data() {
    try {
      const lat = await getlat("Nashville");
      const lon = await getlon("Nashville");
      getDataDay1(lat, lon);
    } catch (err) {
      console.log(err);
    }
  }

  Data();
}

export { runCity };
