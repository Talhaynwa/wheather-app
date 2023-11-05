import axios from "axios";

const API_KEY = "e5969e4f2989197b35aa6de223edd4e9";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getweather = async (city, country) => {
  try {
    let response = await axios.get(
      `${API_URL}?q=${city}, ${country}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.log("Error while calling the api", error.message);
    return error.response;
  }
};
