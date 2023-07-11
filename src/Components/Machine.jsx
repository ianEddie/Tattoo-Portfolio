import { machine } from '../Data/images'
import { GoToTop } from './GoToTop'
export function Machine () {
  return (
    <section className='w-full h-screen snap-center sm:grid sm:grid-cols-2 flex flex-col-reverse justify-center relative' id='machine'>
      <div className='flex justify-center items-center'>
        <img src={machine} alt='tattoo machine' className='rounded-full h-[90%]' />
      </div>
      <div className='flex flex-col items-center justify-center gap-y-5'>
        <h1 className='font-secondary text-secondary text-[5em]'>Maquina</h1>
        <p className='text-neutral-300 font-primary text-xl text-center px-10'>La máquina AVA Premium Wireless Tattoo GT Pen EP7 Black es una herramienta de tatuaje de última generación diseñada para profesionales del tatuaje. Esta máquina ha sido diseñada para proporcionar una experiencia inalámbrica y sin complicaciones, permitiendo a los artistas del tatuaje mayor libertad de movimiento y comodidad durante el proceso de tatuaje.</p>
      </div>
      <GoToTop />
    </section>
  )
}
