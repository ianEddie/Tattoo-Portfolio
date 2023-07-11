export function Menu ({ name, link, handleToggle }) {
  return (
    <a href={link}>
      <li className='font-primary text-neutral-300 sm:text-xl text-2xl' onClick={handleToggle}>{name}</li>
    </a>
  )
}
