import { Result } from "../interfaces/Movies"

export const Card = ({ movie }: { movie: Result }) => {
  return (
    <>
      {movie &&
        <div id='card' className="relative" >
          <div id='header_card ' className=''>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} width={250} alt="image"  className="rounded-md"/>
            <p className="absolute bottom-2 left-2 text-center px-2 font-semibold text-xs   -skew-x-6 text-[#4aacc5] bg-[rgba(0,0,0,0.6)]  drop-shadow-3xl">{movie.title}</p>
          </div>
          <div id='body_card'></div>
        </div>
      }
    </>
  )
}