import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: "57048db528742215f7c88cacad06902c",
    units: "metric",
  },
});

export default instance;
