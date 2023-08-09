import { ApiCinePelis } from "./axiosClient";
import { MoviListProps, ResponseMovieList } from "../interfaces/Movies";

/*
Funcion que retorna lista de peliculas por:
- now_playing   Get a list of movies that are currently in theatres.
- populars      Get a list of movies ordered by popularity.
- top_rated     Get a list of movies ordered by rating.
- upcoming      Get a list of movies that are being released soon.
*/

export interface ServiceResponse {
  msg: string
  movies?: ResponseMovieList
}

async function getMovieListService({ type, language, page }: MoviListProps): Promise<ServiceResponse> {
  try {
    const resp = await ApiCinePelis.get(`/movie/${type}?page=${page}&language=${language}`);

    if (!resp.data || !resp.data.results || resp.data.results.length === 0) {
      return {
        msg: "No se encontraron resultados para la búsqueda",
        movies: undefined
      };
    }


    const listMovie: ResponseMovieList = resp.data;
    return {
      msg: "Encontramos la siguiente lista de películas",
      movies: listMovie
    };

  } catch (error: any) {
    console.error("Error al obtener la lista de películas:", error.message);
    throw new Error("Ocurrio un Error al obtener la lsita de peliculas");

  }
}




/*Get the newest movie ID.*/
// async function getMovieLatestService(): Promise<ServiceResponse> {
//   try {
//     const resp = await ApiCinePelis.get(`/movie/latest`);
//     if (!resp.data || !resp.data.results || resp.data.results.length === 0) {
//       return {
//         msg: "No se encontraron resultados para la búsqueda",
//         movies: undefined
//       };
//     }
//     const latestMovie: ResponseLatestMovie = resp.data;
//     return {
//       msg: "Encontramos la siguiente lista de películas",
//       movies: latestMovie
//     };;
//   } catch (error: any) {
//     console.error("Error al obtener la lista de películas:", error.message);
//     throw new Error("Ocurrio un Error ");
//   }
// }

async function getMovieByID(id: string) {
  
  try {
    const resp = await ApiCinePelis.get(`https://api.themoviedb.org/3/movie/${id}`);
    
    if (!resp.data || !resp.data) {
      return {
        msg: "No se encontraron resultados para la búsqueda",
        movies: undefined
      };
    }

    return {
      msg: "Encontramos la siguiente lista de películas",
      movies: resp.data
    };

  } catch (error: any) {
    console.error("Error al obtener la lista de películas:", error.message);
    throw new Error("Ocurrio un Error al obtener la lsita de peliculas");

  }

}


export {
  getMovieListService,
  getMovieByID
  // getMovieLatestService
}