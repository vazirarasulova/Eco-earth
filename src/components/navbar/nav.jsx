import { NavLink } from "react-router-dom"

const Navbar = () => {
  return(
    <nav className="ms-48">
      <ul className="list-none flex justify-center items-center">
        <li className="inline-block">
          <NavLink className=" text-slate-900 text-xl no-underline ps-3 pe-3" to={"/"}>Home</NavLink>
        </li>
        <li className="inline-block">
          <NavLink className=" text-slate-900 text-xl no-underline ps-3 pe-3" to={"/about"}>About</NavLink>
        </li>
        <li className="inline-block">
          <NavLink className=" text-slate-900 text-xl no-underline ps-3 pe-3" to={"/product"}>Product</NavLink>
        </li>
        <li className="inline-block">
          <NavLink className=" text-slate-900 text-xl no-underline ps-3 pe-3" to={"/korzina"}>Basket</NavLink>
        </li>
        <li className="inline-block">
          <NavLink className=" text-slate-900 text-xl no-underline ps-3 pe-3" to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar