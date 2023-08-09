
export const apiConfig = {
  BASEURL: import.meta.env.VITE_BASE_URL,
  APIKEY: import.meta.env.VITE_API_KEY_MOVIE,
  BEARER: import.meta.env.VITE_APP_BEARER,
  originalImage: (path: string) => `https://image.tmdb.org/t/p/original${path}`,
  w500Image: (path: string) => `https://image.tmdb.org/t/p/w500${path}`,
};
