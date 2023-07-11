import { arrowIcon } from '../Data/images'
//
export function GoToTop () {
  return (
    <a href='#hero'>
      <img src={arrowIcon} alt='arrow icon' className='sm:flex hidden h-7 absolute bottom-7 right-5 cursor-pointer' />
    </a>
  )
}
