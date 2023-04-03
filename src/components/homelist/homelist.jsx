import { NavLink } from "react-router-dom";

const HomeList = ({ title, text, link }) => {
  return (
    <li className='w-80 ms-6 me-6 mb-60'>
      <h3 className='mb-5 text-center text-slate-900 text-2xl'>{title}</h3>
      <p className='mb-12 text-center text-slate-600 font-normal text-xl'>{text}</p>
      <NavLink className='block no-underline text-center text-xl' to={link}>
        Read More 
      </NavLink>
    </li>
  );
};

export default HomeList;
