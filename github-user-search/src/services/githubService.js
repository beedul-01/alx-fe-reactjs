import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q={query}";

export const searchUsers = async ({
  query,
  location,
  minRepos,
  page = 1,
}) => {
  let searchQuery = query;

  if (location) {
    searchQuery += ` location:${location}`;
  }

  if (minRepos) {
    searchQuery += ` repos:>=${minRepos}`;
  }

  const response = await axios.get(BASE_URL, {
    params: {
      q: searchQuery,
      per_page: 10,
      page,
    },
  });

  return response.data;
};



