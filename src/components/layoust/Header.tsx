
import Logo from './Logo'

type Props = {}

export default function Header({}: Props) {
  return (

    

<div className="navbar bg-cyan-600">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl"><Logo/>Productos</a>
  </div>
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
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

  )
}