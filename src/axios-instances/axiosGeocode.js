import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    access_token:
      "pk.eyJ1IjoiaHJpdHZpa2thdXNoaWsiLCJhIjoiY2trcjZhb2ZoMDQ5bzJ3b2kya2U5dGMzYiJ9.SGtqS1r9nXypWmlBnwCbXQ",
    autocomplete: true,
  },
});

export default instance;
