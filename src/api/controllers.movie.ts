import { MoviListProps } from "../interfaces/Movies";
import { ServiceResponse, getMovieByID, getMovieListService } from "./service.movie";





export const movieController = {
  getMovieList: async ({ type, language, page }: MoviListProps): Promise<ServiceResponse> => {
    try {
      const resp: ServiceResponse = await getMovieListService({ type, language, page });
      return resp;
    } catch (error: any) {
      console.error("Error al obtener la lista de películas en el controlador:", error.message);
      throw new Error("Error al obtener la lista de películas");
    }
  },
  getMovieByID: async ({ id }: { id: string }) => {
    const resp = await getMovieByID(id);
    console.log(resp);
    
    return resp.movies
  }
  // getMovieLatest: async () => {
  //   return await getMovieLatestService();
  // }
}
