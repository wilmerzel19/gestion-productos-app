
import Logo from './Logo'

type Props = {}

export default function Header({}: Props) {
  return (

<div className="navbar w-auto bg-cyan-600">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl text-white"><Logo /> Gestion de Productos</a>
  </div>  
  <div className="flex-none">
    <ul className="menu menu-horizontal  px-1 text-white">
      <li><a>productos</a></li>
      <li>
        <details>
          <summary>
            Home
          </summary>
          <ul className="p-2 bg-slate-600 text-blue-900  ">
            <li><a>account</a></li>
            <li><a>Link</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>

  )
}