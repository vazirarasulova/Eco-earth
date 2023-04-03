import { NavLink } from "react-router-dom";
import Navbar from "../navbar/nav";

const Header = () => {
  return (
    <header className='flex justify-between items-center fixed z-50 w-auto text-4xl bg-white  ps-40 pe-44 pt-12 pb-12'>
      <NavLink
        className='inline-block no-underline text-green-600 me-96'
        to={"/"}>
        Eco-earth
      </NavLink>
      <Navbar />
    </header>
  );
};

export default Header;
