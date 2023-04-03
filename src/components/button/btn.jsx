import { NavLink } from "react-router-dom";

export const Btn = ({title , link}) => {
  return (
    <NavLink
      className='inline-block w-56 bg-slate-700 text-white text-center rounded-2xl pt-7 pb-7 ps-12 pe-12'
      to={link}>
      {title}
    </NavLink>
  );
};
