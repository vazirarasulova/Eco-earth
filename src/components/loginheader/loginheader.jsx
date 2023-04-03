import { NavLink } from "react-router-dom";
import { LoginNavbar } from "../loginnavbar/loginnavbar";

export const LoginHeader = () => {
  return (
    <header className='flex justify-between items-center fixed w-auto border-b-2 text-4xl bg-white  ps-40 pe-40 pt-12 pb-12'>
      <NavLink
        className='inline-block no-underline text-yellow-600 me-96'
        to={"/"}>
        Ecobar
      </NavLink>
      <LoginNavbar />
    </header>
  );
};
