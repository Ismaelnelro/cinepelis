import PageLayout from '../layout/PageLayout'
import Carrusel from '../components/Carrusel'
import { movieController } from '../api/controllers.movie'
import { useEffect, useState } from 'react'
import { Result } from '../interfaces/Movies'
import Categorias from '../components/Categorias'
import { Movie } from '../interfaces/movie'
import DetallesPeliculas from '../components/DetallesPeliculas'
import Navbar from '../components/Navbar'
import { Hero } from '../components/Hero'


const styles = 'w-full h-auto relative';

export const HomePage = () => {

  const [now_playing, setnow_playing] = useState<Result[]>()
  const [popular, setpopular] = useState<Result[]>()
  const [top_rated, settop_rated] = useState<Result[]>()
  const [upcoming, setupcoming] = useState<Result[]>()

  useEffect(() => {
    getMoviList();
  }, [])


  async function getMoviList() {
    // const resp = await ApiCinePelis.get(`/movie/now_playing?page=2`);
    // console.log(resp);

    const now_playing = await movieController.getMovieList({ type: "now_playing" });
    console.log(now_playing);
    if (now_playing) setnow_playing(now_playing.movies?.results)

    const popular = await movieController.getMovieList({ type: "popular" });
    if (popular) setpopular(popular.movies?.results)
    const top_rated = await movieController.getMovieList({ type: "top_rated" });
    if (top_rated) settop_rated(top_rated.movies?.results)
    const upcoming = await movieController.getMovieList({ type: "upcoming" });
    if (upcoming) setupcoming(upcoming.movies?.results)
  }


  const [modalInfo, setmodalInfo] = useState<boolean>(false);
  const [movieDetails, setmovieDetails] = useState<Movie>();

  const handdleModal = async () => {
    const id = localStorage.getItem("id_movie");
    if (id !== null) {
      const id_movie = JSON.parse(id);
      const data = await movieController.getMovieByID({ id: id_movie });
      if (data) {
        setmovieDetails(data);
      }
      setmodalInfo(!modalInfo)
    }
    modalShow();
  }


  const modalShow = () => {
    setmodalInfo(!modalInfo)

  }


  return (
    <PageLayout styles='h-[2000px] relative top-0'>
      <Navbar />
      <Categorias title='Series' />
      <Hero movieId='iuntihpAo8A' />

      {(modalInfo && movieDetails) && <DetallesPeliculas movie={movieDetails} modalShow={modalShow} />}

      <div className='pl-14 relative'>
        {now_playing && <Carrusel styles={styles} title='Now Playing' moviList={now_playing} handdleModal={handdleModal} />}
        {top_rated && <Carrusel styles={styles} title='Top Rated' moviList={top_rated} handdleModal={handdleModal} />}
        {popular && <Carrusel styles={styles} title='Popular' moviList={popular} handdleModal={handdleModal} />}
        {upcoming && <Carrusel styles={styles} title='Upcoming' moviList={upcoming} handdleModal={handdleModal} />}
      </div>
    </PageLayout>
  )
}
