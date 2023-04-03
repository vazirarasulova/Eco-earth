import { Route,  Routes } from "react-router-dom";
import { Login } from "../../components/login/login";
import Home from "../home/home";
import { Product } from "../product/product";
import { Unautherization } from "../unautherization/unautherization";

export const Autherization = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route  path='/' element={<Home />} />
        <Route  path='/product' element={<Product />} />
        <Route  path='/signup' element={<Unautherization />} />
      </Routes>
    </>
  );
};
