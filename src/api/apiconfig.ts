const API_KEY = import.meta.env.REACT_APP_API_KEY_MOVIE;
const BEARER = import.meta.env.REACT_APP_BEARER;
export const apiConfig = {
  baseurlmovie: "https://api.themoviedb.org/3",
  apikeymovie: API_KEY,
  bearer: BEARER,
  originalImage: (path: string) => `https://image.tmdb.org/t/p/original${path}`,
  w500Image: (path: string) => `https://image.tmdb.org/t/p/w500${path}`,
};
