import './App.css'
import { movieController } from './api/controllers.movie';

function App() {

  const probando = async () => {

    //details by id
    // const data = await pelisApi.get('https://api.themoviedb.org/3/movie/346698');

    //Obtener genero de peliculas y tv
    // const data = await pelisApi.get('https://api.themoviedb.org/3/genre/movie/list');
    // { id: 28, name: 'Action' }
    // const data = await pelisApi.get('https://api.themoviedb.org/3/genre/tv/list');
    //Obtener por genero especifico
    // https://developer.themoviedb.org/reference/discover-movie ==> categorias especificas
    // const data = await pelisApi.get('https://api.themoviedb.org/3/discover/movie?with_genres=28');
    // const data = await pelisApi.get('https://api.themoviedb.org/3/discover/tv?with_genres=28');

    //obtener pelicula por params determinados usando Qery
    // https://developer.themoviedb.org/reference/search-movie
    // const data = await pelisApi.get('https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=es-ES');


    // https://api.themoviedb.org/3/configuration/languages ruta para todo los idiomas


    //DETAILS

    console.log(
     await  movieController.getMovieList({ type: "now_playing", page: '2', language: "de-DE" })
    );



  }

  probando();

  return (
    <>
      <h1 className='text-yellow-600'>Hola mundo</h1>
    </>
  )
}

export default App
