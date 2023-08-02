export const apiConfig = {
  baseurlmovie: "https://api.themoviedb.org/3",
  apikeymovie: "abf04212128bd8dcff7b88c6749484d4",
  bearer: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmYwNDIxMjEyOGJkOGRjZmY3Yjg4YzY3NDk0ODRkNCIsInN1YiI6IjY0MTNiZGQyNTMyYWNiMDBkNzU2YTk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mca4_4l7Jg3tCN62e6XUzdISfQz-rzqYdC6K9fXlL8c",
  originalImage: (path: string) => `https://image.tmdb.org/t/p/original${path}`,
  w500Image: (path: string) => `https://image.tmdb.org/t/500${path}`,
};
