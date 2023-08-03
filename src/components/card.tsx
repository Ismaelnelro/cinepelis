import { Result } from "../interfaces/Movies"
import { IoIosArrowDown } from 'react-icons/io'

export const Card = ({ movie }: { movie: Result }) => {
  console.log(movie);

  return (
    <>
      {movie &&
        <div key={movie.id} className='group inline-block min-w-fit rounded-md  overflow-visible
        transition-all ease-out duration-400 '>
          <div className="group-hover:relative  group-hover:flex  group-hover:w-[242px] transition-all ease-out duration-400 "></div>

          <div id='card' className=" 
          relative  
          group-hover:absolute  
          group-hover:scale-150 
          group-hover:z-50 
          group-hover:h-56 
          group-hover:w-[200px] 
          group-hover:rounded-md
          group-hover:shadow-lg
          group-hover:shadow-black
          transition-all ease-out duration-500  
          group-hover:bg-[#141414] 
          " >

            <div id='header_card ' className='relative top-0'>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} width={242} alt="image" className="rounded-md group-hover:rounded-b-none" />
              <p className="absolute bottom-2 left-2 text-center px-2 font-semibold text-xs   -skew-x-6 text-[#4aacc5] bg-[rgba(0,0,0,0.6)]  drop-shadow-3xl">{movie.title}</p>
            </div>

            <div id='body_card' className="hidden group-hover:block text-white px-1 text-[9px]   transition-all ease-out duration-200  ">
              <div className="flex justify-between items-center h-9 px-1 ">
                <div className="flex items-center gap-4">
                  <p className="text-[#6fd46b]  text-sm">{movie.vote_average}% para ti</p>
                  <p className="font-light  border-[1px] px-1">{movie.adult ? "18+" : "ATP"}</p>
                </div>
                <div className="border-[1.5px] rounded-full bg-neutral-800 border-gray-600 p-2 hover:border-gray-200 ">
                  <IoIosArrowDown size={10} className="react-icon"/>
                </div>
              </div>
              <p className=" font-semibold">{movie.original_title}</p>
              <p className="">
                <span className="font-semibold">
                  Overview:
                </span>
                <br />
                {movie.overview.substring(0, 70)} ...</p>
            </div>
          </div>
        </div >
      }
    </>
  )
}


/*
  vote_average
  more..
*/