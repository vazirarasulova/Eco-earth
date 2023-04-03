import { NavLink } from "react-router-dom";

export const FooterNavbar = () => {
  return (
    <>
      <nav className='ms-48'>
        <ul className='list-none flex justify-center items-center'>
          <li className='inline-block'>
            <NavLink
              className=' text-white text-xl no-underline ps-3 pe-3'
              to={"/"}>
              Home
            </NavLink>
          </li>
          <li className='inline-block'>
            <NavLink
              className=' text-white text-xl no-underline ps-3 pe-3'
              to={"/about"}>
              About
            </NavLink>
          </li>
          <li className='inline-block'>
            
          </li>
          <li className='inline-block'>
            <NavLink
              className=' text-white text-xl no-underline ps-3 pe-3'
              to={"/product"}>
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
