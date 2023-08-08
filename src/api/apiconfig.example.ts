export const apiConfig = {
  baseurlmovie: "https://api.movie.example/",
  apikeymovie: "api key ",
  bearer: "Bearer",
  originalImage: (path: string) => `https://image.tmdb.org/t/p/original${path}`,
  w500Image: (path: string) => `https://image.tmdb.org/t/p/w500${path}`,
};
