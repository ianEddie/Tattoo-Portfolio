import arrow from '../Assets/arrowIcon.png'
//
export function GoToTop () {
  return (
    <a href='#hero'>
      <img src={arrow} alt='arrow icon' className='sm:flex hidden h-7 absolute bottom-7 right-5 cursor-pointer' />
    </a>
  )
}
