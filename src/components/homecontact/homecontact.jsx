import { NavLink } from "react-router-dom";
import Tel from "../../assets/images/Call.svg";
import Image from "../../assets/images/img.png"
import { Btn } from "../button/btn";

export const HomeContact = () => {
  return (
    <section className='flex items-center mb-56 ps-40 pe-40'>
      <div className="inline-block w-1/2 me-20">
        <div className='w-auto mb-6'>
          <h3 className='text-5xl font-normal'>
            We Create The Art Of Stylish Living Stylishly
          </h3>
        </div>
        <div className='w-9/12 mb-8'>
          <p className='text-xl'>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
        </div>
        <div className='flex items-center mb-12'>
          <span className='inline-block bg-slate-200 w-24 rounded-full mr-4 p-8'>
            <img src={Tel} alt='Phone' width={32} />
          </span>
          <span >
            <NavLink className="block font-bold no-underline text-xl" type="tel:+012345678">012345678</NavLink>
            <span className="block text-xl font-normal">Call Us Anytime</span>
          </span>
        </div>
        <Btn title={"Get Free Estimate"} link="/about"/>
      </div>
      <div>
        <img src={Image} alt="Image" width={532}  />
      </div>
    </section>
  );
};
