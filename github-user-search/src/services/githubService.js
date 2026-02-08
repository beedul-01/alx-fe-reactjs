import axios from "axios";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = "https://api.github.com/users/{username}";

export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};


