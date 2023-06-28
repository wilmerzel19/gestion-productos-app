
import { Link } from 'react-router-dom'
import Enlace from './Enlace'
import Logo from './Logo'
import Button from './Button'


export default function Header() {
  return (

    

<div className="navbar flex justify-between  bg-cyan-600">
  <div className="flex-1">
    <Link to="/">
    <a className="btn btn-ghost normal-case text-lg"><Logo/>G.Productos</a>

</Link>
  </div>
  <Button text={'Crear'}/>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
    
     
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">
        <div className="w-10 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     
        <li><Enlace text='productos' route='/'  /></li>
        <li><Enlace text='servicios' route='/servicios'  /></li>
        <li><Enlace text='Contacto' route='/contacto'  /></li>
      </ul>
 
    </div>
  </div>
</div>

  )
}