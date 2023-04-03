import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/header";
import "./main.css";

export const Product = () => {
  const [state, setState] = React.useState();

  function fetchdata() {
    const data = axios({
      method: "GET",
      url: "http://localhost:8080/product",
      headers: {
        "content-type": "application/json",
      },
    }).catch((error) => console.log(error));
    setState(data.data);
    console.log(data.data, state);
  }

  setInterval(() => {
    fetchdata();
  }, 10000);

  return (
    <>
      <Header />
      <div className='bg-white pt-32 mb-40'>
        <div className='box mx-auto'>
          <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
            <div className='absolute box-mox block mt-0 mb-0 me-auto ms-auto bg-white border rounded-3xl pt-10 pe-32 pb-10 ps-32'>
              <h2 className='text-3xl'>Products</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {/* {state.map((e) => (
              <NavLink to={`/product/${e.id}`} class='group'>
                <div class='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
                  <img
                    src={img}
                    alt={`${alt}`}
                    class='h-full w-full object-cover object-center group-hover:opacity-75'
                  />
                </div>
                <h3 class='mt-4 text-sm text-gray-700'>{e.title}</h3>
                <p class='mt-1 text-lg font-medium text-gray-900'>{e.price}</p>
              </NavLink>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};
