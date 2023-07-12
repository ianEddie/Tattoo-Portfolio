import { menuIcon, closeIcon } from '../Data/images'

//
export function ToggleMenu ({ toggle, handleToggle }) {
  return (
    <div className='absolute right-8 top-5'>
      <img src={toggle ? closeIcon : menuIcon} alt='icon' onClick={handleToggle} className='cursor-pointer h-6' />
    </div>
  )
}
