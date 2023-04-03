import { NavLink } from "react-router-dom";

export const JoinReview = () => {
  return (
    <section className='mb-32 ps-40 pe-40'>
      <div className='bg-black rounded-3xl pt-20 pe-80 pb-20 ps-80 '>
        <h3 className='text-white font-normal text-5xl text-center mb-3'>
          Wanna join the interno?
        </h3>
        <span className='block text-white font-normal text-lg text-center mb-8'>
          It is a long established fact will be distracted.
        </span>

        <NavLink
          className='block w-56 bg-yellow-700 text-white text-center rounded-2xl mt-0 mb-0 ms-auto me-auto pt-7 pb-7 ps-12 pe-12'
          to={"/login"}>
          Contact With Us
        </NavLink>
      </div>
    </section>
  );
};
