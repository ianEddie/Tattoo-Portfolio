import { aboutImage } from '../Data/images'
import { GoToTop } from './GoToTop'
export function About () {
  return (
    <section className='w-full h-screen snap-center relative flex flex-wrap' id='info'>
      <div className='flex flex-col items-center justify-center gap-y-2 sm:w-1/2'>
        <h1 className='font-secondary text-secondary text-[5em]'>Info</h1>
        <p className='text-center px-10 font-primary text-xl tracking-wide text-neutral-300'>
          Soy un artista del tatuaje apasionado y creativo, con un estilo único que fusiona lo tradicional con lo moderno, aplicando mi toque personal en cada pieza. Mi habilidad para plasmar ideas en la piel se destaca por su precisión y atención al detalle. Cada diseño que realizo cuenta una historia y refleja la personalidad de mis clientes con el objetivo es crear obras de arte duraderas y significativas.
        </p>
      </div>
      <div className='flex justify-center items-center gradient flex-grow'>
        <img src={aboutImage} alt='picture' className='h-[20em] rounded-full' />
      </div>
      <GoToTop />
    </section>
  )
}
