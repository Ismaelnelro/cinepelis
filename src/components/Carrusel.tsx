import { useEffect, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { Card } from './card';

import { CarruselProps, arrowPorps } from '../interfaces/Carrusel';
import { Result } from '../interfaces/Movies';



const Carrusel = ({ styles, title, moviList,handdleModal }: CarruselProps) => {

  const [MovieList, setMovieList] = useState<Result[]>()

  useEffect(() => {
    if (moviList) {
      setMovieList(moviList)
    }
  }, [])


  return (
    <div className='mt-4'>
      <div className='group relative flex items-center justify-start gap-2 overflow-hidden w-56 h-12'>
        <h1 className='capitalize font-semibold text-white w-24 h-12 flex items-center '>{title}</h1>
        <button className='text-[#4aacc5] text-[.8rem] font-semibold inline-block group-hover:animate-pulse h-12 ' >Explorar todos</button>
        <span className='w-28 h-12 absolute left-24 bg-[#141414] group-hover:left-56   transition-all ease-out duration-500'></span>
        <p className='z-50  absolute left-24 animate-pulse group-hover:animate-none group-hover:left-52 transition-all ease-out duration-500 h-12  flex items-center '><IoIosArrowForward color='#4aacc5' size={14} /></p>
      </div>

      <div className={styles}>
        <div id='container_carrusel' className='relative w-full h-full flex items-center '>
          <div id='carrusel' className=' w-full h-auto  flex gap-2 overflow-hidden'>
            {MovieList && MovieList.map((movie) => (
                <Card key={movie.id} movie={movie} handdleModal={handdleModal} />
            ))}
          </div>

          <Arrows icon={<IoIosArrowBack size={33} />} position='left-0' />
          <Arrows icon={<IoIosArrowForward size={33} />} position='right-0' />
        </div>
      </div>
    </div>
  )
}

export default Carrusel







export const Arrows = ({ icon, position }: arrowPorps) => {
  return (
    <div className={`absolute ${position} top-0 w-12 h-full flex  items-center hover:bg-black text-white hover:opacity-30 `}  >
      {icon}
    </div >
  )
}



