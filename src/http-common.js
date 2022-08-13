import axios from "axios";

export default axios.create({
  baseURL: "https://painting-diamonds.herokuapp.com/paintings",
  headers: {
    "Content-type": "application/json",
  },
});
