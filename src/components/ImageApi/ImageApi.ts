import axios from "axios";

const API_KEY = "nraUfKca8XbOXLFb2Q0yB4Cso66eCg6JrtjPsAHDEfQ";
const BASE_URL = "https://api.unsplash.com/search/photos";


interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}


interface UnsplashApiResponse {
  results: Image[];
  total: number;
  total_pages: number;
}


export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<UnsplashApiResponse> => {
  const response = await axios.get<UnsplashApiResponse>(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return response.data;
};
