import { NavLink } from "react-router-dom"

export const LoginNavbar = () => {
  return(
    <nav className="ms-80" style={{marginLeft: 360}}>
      <ul className="list-none flex justify-center items-center">
        <li className="inline-block">
          <NavLink className=" text-slate-900 text-xl no-underline ps-3 pe-3" to={"/"}>Home</NavLink>
        </li>
        <li className="inline-block">
          <NavLink className=" text-slate-900 text-xl no-underline ps-3 pe-3" to={"/about"}>About</NavLink>
        </li>
        <li className="inline-block">
          <NavLink className=" text-slate-900 text-xl no-underline ps-3 pe-3" to={"/services"}>Services</NavLink>
        </li>
        <li className="inline-block">
          <NavLink className=" text-slate-900 text-xl no-underline ps-3 pe-3" to={"/product"}>Product</NavLink>
        </li>
      </ul>
    </nav>
  )
}