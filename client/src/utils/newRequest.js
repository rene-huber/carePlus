import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://demo.rene-huber.eu/api/",
 
  withCredentials: true,
});

export default newRequest;
