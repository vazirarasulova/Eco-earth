import { NavLink } from "react-router-dom";
import { FooterNavbar } from "../footernavbar/footernavbar";

export const Footer = () => {
  return (
    <footer className='flex justify-between items-center bg-green-600 w-auto  ps-40 pe-40 pt-12 pb-12'>
      <NavLink
        className='inline-block no-underline text-3xl text-white me-96'
        to={"/"}>
        Eco-earth
      </NavLink>
      <FooterNavbar />
    </footer>
  );
};
