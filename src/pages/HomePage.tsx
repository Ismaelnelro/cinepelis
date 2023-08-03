import PageLayout from '../layout/PageLayout'
import Carrusel from '../components/Carrusel'
import { movieController } from '../api/controllers.movie'
import { useEffect, useState } from 'react'
import { Result } from '../interfaces/Movies'
import Categorias from '../components/Categorias'


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
    const now_playing = await movieController.getMovieList({ type: "now_playing", page: "2" });
    if (now_playing) setnow_playing(now_playing.movies?.results)

    const popular = await movieController.getMovieList({ type: "popular" });
    if (popular) setpopular(popular.movies?.results)

    const top_rated = await movieController.getMovieList({ type: "top_rated" });
    if (top_rated) settop_rated(top_rated.movies?.results)

    const upcoming = await movieController.getMovieList({ type: "upcoming" });
    if (upcoming) setupcoming(upcoming.movies?.results)
  }

  return (
    <PageLayout styles='p-6'>
      <Categorias />
      {now_playing && <Carrusel styles={styles} title='Now Playing' moviList={now_playing} />}
      {top_rated && <Carrusel styles={styles} title='Top Rated' moviList={top_rated} />}
      {popular && <Carrusel styles={styles} title='Popular' moviList={popular} />}
      {upcoming && <Carrusel styles={styles} title='Upcoming' moviList={upcoming} />}
    </PageLayout>
  )
}
