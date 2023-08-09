export const apiConfig = {
  baseurlmovie: "https://api.themoviedb.org/3",
  apikeymovie: import.meta.env.REACT_APP_API_KEY_MOVIE,
  bearer: import.meta.env.REACT_APP_BEARER,
  originalImage: (path: string) => `https://image.tmdb.org/t/p/original${path}`,
  w500Image: (path: string) => `https://image.tmdb.org/t/p/w500${path}`,
};
