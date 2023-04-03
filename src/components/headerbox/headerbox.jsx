import { Btn } from "../button/btn";
import "./main.css";

export const HeaderBox = () => {
  return (
    <section className='header-box'>
      <div className='title-box mb-3'>
        <h1 className='text-slate-900 text-7xl font-normal'>
          Let Your Home Be Unique
        </h1>
      </div>
      <span className='block  w-96 font-normal mb-12'>
        There are many variations of the passages of lorem ,variations of the
        passages.
      </span>
      <Btn title={"Get Started"} link="/services"/>
    </section>
  );
};
