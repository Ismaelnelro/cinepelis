import { Movie } from '../interfaces/movie'
import { VscChromeClose } from 'react-icons/vsc'
import VideoYoutube from './VideoYoutube'
import { ApiCinePelis } from '../api/axiosClient';
import { useEffect, useState } from 'react';
import { Recomendaciones } from '../interfaces/Recomendaciones';

const DetallesPeliculas = ({ movie, modalShow }: { movie: Movie, modalShow: () => void }) => {
  const releaseDate = new Date(movie.release_date).toLocaleDateString();
  const [recomendaciones, setrecomendaciones] = useState<Recomendaciones[]>()
  const [Crew, setCrew] = useState<string[]>()


  useEffect(() => {
    handdleRecomendationMovies();
    handdleElencoMovies();
  }, [])

  const handdleRecomendationMovies = async () => {
    const { data } = await ApiCinePelis.get(`https://api.themoviedb.org/3/movie/${movie.id}/recommendations?language=en-US&page=1`)
    setrecomendaciones(data.results)
  }
  const handdleElencoMovies = async () => {
    console.log(movie.id);

    const { data } = await ApiCinePelis.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?language=en-US`)
    const reparto_nombres = data.cast.slice(0, 10).map((actor: any) => actor.name)
    setCrew(reparto_nombres)
  }


  return (
    <div className='absolute top-0  h-[1200px] w-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50 text-white'>
      <div id="container" className='bg-[#141414] w-2/3 h-auto rounded-xl relative'>

        <div id="close" className='bg-[#181818] rounded-full w-11 text-lg text-center p-2 absolute top-4 right-4' onClick={modalShow}>
          <VscChromeClose size={28} className="react-icon-close" />
        </div>

        <VideoYoutube videoId={'iuntihpAo8A'} />

        <div id="info_body" className='w-ful'>

          <div className="flex p-2 w-full">


            <div id='left_col' className='pl-10 pt-4 flex flex-col gap-2 '>
              <p className='uppercase text-5xl '>{movie.title}</p>
              <span className='flex gap-4'>
                <p className="text-[#6fd46b]  text-2xl">{Math.round(movie.popularity)}% Popularidad</p>
                <p className="font-light w-10 flex justify-center items-center  border-[1px] text-center text-[14px]">{movie.adult ? "18+" : "ATP"}</p>
                <p className="font-light w-10 flex justify-center items-center  border-[1px] text-center text-[14px] uppercase">{movie.original_language}</p>
              </span>
              <p>Duracion:&nbsp; {movie.runtime}min</p>
              <p>Estreno: &nbsp; {releaseDate}</p>
              <p>{movie.overview}</p>
            </div>


            <div id='right_col' className='p-10 pt-20'>
              <p className='text-[#4c4c4c] font-medium'>
                Elenco:
              </p>
              <ul className='flex flex-wrap justify-start items-center gap-2 m-auto '>
                {Crew && Crew.map((name, index) => (
                  <li key={index} className='list-item text-[15px] ' >
                    {name}
                  </li>
                ))}
              </ul>

              <p className='text-[#4c4c4c] font-medium'>
                Genero:
              </p>
              <ul className='flex justify-start items-center gap-2 m-auto'>
                {movie.genres.map((gen, index) => (
                  <li key={index} className=' text-[15px] ' >
                    {gen.name}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className=' p-11'>
            <h1 className='text-4xl  w-full pb-2'>RECOMENDACIONES</h1>

            <div className='flex  justify-center items-center  gap-3 w-full'>
              {
                recomendaciones &&
                <>
                  <div className='relative'>
                    <img src={`https://image.tmdb.org/t/p/w500/${recomendaciones[0]?.backdrop_path}`} width={232} alt="image" className="rounded-md group-hover:rounded-b-none" />
                    <p className='text-[13px] absolute bottom-0 bg-[rgba(0,0,0,0.4)] w-32'>{recomendaciones[0]?.title}</p>
                  </div>
                  <div className='relative'>
                    <img src={`https://image.tmdb.org/t/p/w500/${recomendaciones[1]?.backdrop_path}`} width={232} alt="image" className="rounded-md group-hover:rounded-b-none" />
                    <p className='text-[13px] absolute bottom-0 bg-[rgba(0,0,0,0.4)] w-32'>{recomendaciones[1]?.title}</p>
                  </div>
                  <div className='relative'>
                    <img src={`https://image.tmdb.org/t/p/w500/${recomendaciones[2]?.backdrop_path}`} width={232} alt="image" className="rounded-md group-hover:rounded-b-none" />
                    <p className='text-[13px] absolute bottom-0 bg-[rgba(0,0,0,0.4)] w-32'>{recomendaciones[2]?.title}</p>
                  </div>
                  <div className='relative'>
                    <img src={`https://image.tmdb.org/t/p/w500/${recomendaciones[4]?.backdrop_path}`} width={232} alt="image" className="rounded-md group-hover:rounded-b-none" />
                    <p className='text-[13px] absolute bottom-0 bg-[rgba(0,0,0,0.4)] w-32'>{recomendaciones[4]?.title}</p>
                  </div>
                </>
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DetallesPeliculas