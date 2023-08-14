import { useState } from 'react';
import { BiListUl, BiSolidGridAlt } from 'react-icons/bi'

const Categorias = ({ title }: { title: string }) => {

  const [isScrolled, setisScrolled] = useState(false);

  window.onscroll = () => {
    const value = window.pageYOffset !== 0 ? true : false;
    setisScrolled(value);
    return () => (window.onscroll = null);
  };


  return (
    <div className={`w-full ${isScrolled ? ' bg-[#0c0c0c] transition-all ease-out duration-500' : 'bg-transparent transition-all ease-out duration-500'}
     flex items-center justify-between   fixed top-16 left-0 z-50  h-16  md:py-0   lg:px-14  md:px-6 `}>
      <div className='flex justify-center items-center gap-10'>
        <h1 className='text-4xl font-bold text-white capitalize'>{title} </h1>
        <div className="h-auto">
          <select className="w-28 h-8 bg-black text-xs p-1 font-semibold text-white border-2 border-white">
            <option value="opcion1">Género</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
            <option value="opcion4">Opción 4</option>
            <option value="opcion5">Opción 5</option>
            <option value="opcion6">Opción 6</option>
            <option value="opcion7">Opción 7</option>
            <option value="opcion8">Opción 8</option>
            <option value="opcion9">Opción 9</option>
            <option value="opcion10">Opción 10</option>
          </select>
        </div>
        
      </div>

      <div className='flex'>
        <div className='border-[1px] px-3 py-1'><BiListUl       size={17} color="white" /></div>
        <div className='border-[1px] px-3 py-1'><BiSolidGridAlt size={17} color="white" /></div>
      </div>

    </div>
  )
}

export default Categorias