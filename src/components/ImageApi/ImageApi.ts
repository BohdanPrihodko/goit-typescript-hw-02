import axios from 'axios';

const API_KEY = "nraUfKca8XbOXLFb2Q0yB4Cso66eCg6JrtjPsAHDEfQ";
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return response.data;
};