import { MoviListProps } from "../interfaces/Movies";
import { ServiceResponse, getMovieLatestService, getMovieListService } from "./service.movie";





export const movieController = {
  getMovieList: async (props: MoviListProps) => {
    try {
      const resp: ServiceResponse = await getMovieListService(props);
      return resp;
    } catch (error: any) {
      console.error("Error al obtener la lista de películas en el controlador:", error.message);
      throw new Error("Error al obtener la lista de películas");
    }
  },
  getMovieLatest: async () => {
    return await getMovieLatestService();
  }
}
