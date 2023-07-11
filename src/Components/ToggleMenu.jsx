import { menuIcon, closeIcon } from '../Data/images'

//
export function ToggleMenu ({ toggle, handleToggle }) {
  return (
    <div className='absolute right-5 top-5'>
      <img src={toggle ? closeIcon : menuIcon} alt='icon' onClick={handleToggle} className='cursor-pointer' />
    </div>
  )
}
