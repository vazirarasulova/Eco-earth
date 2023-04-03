import  { useContext } from "react";
import { Context } from "../context/Context";

const useToken = () => {
  const ctx = useContext(Context)

  return [ctx.state , ctx.setState]
};

export default useToken