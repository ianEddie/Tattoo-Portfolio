import menu from '../Assets/menuIcon.png'
import close from '../Assets/closeIcon.png'
//
export function ToggleMenu ({ toggle, handleToggle }) {
  return (
    <div className='absolute right-5 top-5'>
      <img src={toggle ? close : menu} alt='icon' onClick={handleToggle} className='cursor-pointer' />
    </div>
  )
}
