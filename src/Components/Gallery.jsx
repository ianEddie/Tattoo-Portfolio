import { Carousel } from 'flowbite-react'
import { images } from '../Data/images,js'
import { GoToTop } from './GoToTop'
export function Gallery () {
  return (
    <section className='relative snap-center'>
      <Carousel
        id='galeria'
        className='w-full h-screen'
        slideInterval={2000}
      >
        {
      images.map((item) => (
        <div key={item.id} className='flex justify-center items-center h-[85%]'>
          <img src={item.url} alt={item.alt} className='h-full rounded-xl' />
        </div>
      ))
    }
      </Carousel>
      <GoToTop />
    </section>
  )
}
