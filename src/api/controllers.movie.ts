import { MoviListProps } from "../interfaces/Movies";
import { ServiceResponse,  getMovieListService } from "./service.movie";





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
  // getMovieLatest: async () => {
  //   return await getMovieLatestService();
  // }
}
