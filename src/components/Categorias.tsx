import { BiListUl, BiSolidGridAlt } from 'react-icons/bi'

const Categorias = () => {
  return (
    <div className='w-full bg-[#141414]
     flex items-center justify-between   sticky top-0 left-0 z-50'>
      <div className='flex'>
        <h1 className='text-3xl font-bold text-white'>Películas </h1>
        <div className=" bg-black">
          <select className="bg-black text-xs p-1 font-semibold text-white border-2 border-white">
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
        <div><BiListUl        size={28} color="white" /></div>
        <div><BiSolidGridAlt  size={28} color="white" /></div>
      </div>

    </div>
  )
}

export default Categorias