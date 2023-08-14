import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitch, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi"

const Footer = () => {
  return (
    <div className='bg-[#141414] w-full absolute bottom-0'>

      <div className="px-40 py-9 w-full ">
        <a href="#" className="inline-block p-3 text-white"><BiLogoFacebook size={29} /></a>
        <a href="#" className="inline-block p-3 text-white"><BiLogoInstagram size={29} /></a>
        <a href="#" className="inline-block p-3 text-white"><BiLogoTwitter size={29} /></a>
        <a href="#" className="inline-block p-3 text-white"><BiLogoYoutube size={29} /></a>

        <div className="grid grid-cols-4 gap-5 text-xs  text-gray-400">
          <a href="#" className="hover:underline">Audio descriptivo</a>
          <a href="#" className="hover:underline">Relaciones con inversionistas</a>
          <a href="#" className="hover:underline">Avisos legales</a>
          <a href="#" className="hover:underline">Centro de ayuda</a>
          <a href="#" className="hover:underline">Empleo</a>
          <a href="#" className="hover:underline">Preferencias de cookies</a>
          <a href="#" className="hover:underline">Tarjeta de regalo</a>
          <a href="#" className="hover:underline">Terminos de uso</a>
          <a href="#" className="hover:underline">Informacion corporativa</a>
          <a href="#" className="hover:underline">Prensa</a>
          <a href="#" className="hover:underline">Privacidad</a>
          <a href="#" className="hover:underline">Contactanos</a>
        </div>

        <button className="border-[1px] border-gray-400 px-3 py-2 mt-3 text-xs  text-gray-400">Codigo de servicio</button>
      </div>
    </div>
  )
}

export default Footer