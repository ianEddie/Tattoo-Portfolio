import { menu } from '../Data/menu'
import { Menu } from './Menu'
import { useToggle } from '../Hooks/useToggle'
import { ToggleMenu } from './ToggleMenu'
//
export function Header () {
  const { toggle, handleToggle } = useToggle()
  return (
    <header className='w-full fixed flex justify-center z-10 pt-3'>
      <ToggleMenu toggle={toggle} handleToggle={handleToggle} />
      {
        toggle &&
          <ul className='sm:bg-transparent bg-primary sm:flex sm:flex-row sm:gap-x-10 sm:h-auto h-screen w-full flex flex-col  items-center justify-center gap-y-16'>
            {
              menu.map((item) => (
                <Menu key={item.id} {...item} handleToggle={handleToggle} />
              ))
            }
          </ul>
      }

    </header>
  )
}
