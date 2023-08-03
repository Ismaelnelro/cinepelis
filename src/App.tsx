import './App.css'
import MainLayout from './layout/MainLayout'
import { HomePage } from './pages/HomePage'

function App() {


  //details by id
  // const data = await pelisApi.get('https://api.themoviedb.org/3/movie/739405');

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





  return (
    <MainLayout styles='w-full h-full p-2 bg-[#141414]'>
      <HomePage/>
    </MainLayout>
  )
}

export default App
