import { useState } from 'react'
import { Link } from 'react-router-dom'
import PerfilesOpciones from './ui/PerfilesOpciones'

import logo from '../assets/logo.png'
import '../styles/perfiles.css'

const LINK_NAVBAR = ["Inicio", "Series", "Peliculas", "Novedades populares", "Mi lista", "Explora por idiomas"]

const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false);

  window.onscroll = () => {
    const value = window.pageYOffset !== 0 ? true : false;
    setisScrolled(value);
    return () => (window.onscroll = null);
  };

  return (
    <div className={`sticky top-0 left-0 z-[999] w-full h-16  md:py-0   lg:px-14  md:px-6  flex items-cente justify-between text-slate-300  ${isScrolled ? "bg-[#0c0c0c]" : "bg-gradient-to-b from-[#0c0c0c] to-transparent"}`}>
      <div className='flex items-center'>
        <img src={logo} width={100} alt="Cine Peli logo" />
        <ul className='flex lg:pl-9 md:pl-3 lg:gap-4  md:gap-2 w-full h-fit'>
          {
            LINK_NAVBAR.map((link, i) => (
              <li  key={i}  className='list-none px-1 md:text-xs lg:text-sm'>
                <Link to={`${i}`} className='focus:text-white focus:font-medium hover:text-zinc-400 transition-all ease-in duration-300 h-auto  max-w-fit tracking-tight '>
                  {link}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>

      <div className='flex items-center justify-end gap-6 h-16  w-96 '>

        <div id='navbar-search' className='group flex items-center justify-end gap-2 hover:w-56 transition-all ease-in-out duration-700 '>

          <svg width="30" height="30" className='cursor-pointer fill-white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z">
            </path>
          </svg>

          <input type="text" className=' w-0 h-8 transition-all ease-in duration-700 
         hidden   group-hover:w-40  group-hover:block  focus:w-40  focus:block    focus:outline-none pl-2 text-black bg-white '/>
        </div>

        <div>
          <svg width="30" height="30" className='cursor-pointer' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Bell" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z" fill="white"></path>
          </svg>
        </div>

        <div id='perfil-avatar' className='flex items-center gap-2 group pr-3 h-full  transition-all ease-out duration-700'>
          <img src="https://occ-0-2025-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTznvQlDlb-DTY57Bj9r25bgufQrWczbgk5vxk1gOjBtI9GDbRZrOohvgoY3gzb1b7GnSTJ5Ly0_xl-MOQGQJD8nYZ3bwoc.png?r=a16" alt="" width={32} className='rounded-sm cursor-pointer' />
          <span className="border-b-[6px] border-b-white border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent rotate-180 group-hover:rotate-0 transition-all ease-out duration-300"></span>

          <PerfilesOpciones />
        </div>
      </div>
    </div>
  )
}

export default Navbar