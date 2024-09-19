import axios from "axios";
import { Image as ImageType } from "../../App.types";

const API_KEY = "nraUfKca8XbOXLFb2Q0yB4Cso66eCg6JrtjPsAHDEfQ";
const BASE_URL = "https://api.unsplash.com/search/photos";




interface UnsplashApiResponse {
  results: ImageType[];
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
