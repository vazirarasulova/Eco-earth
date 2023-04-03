import React, { useEffect, useState } from "react";

const Context = React.createContext();

const TokenProvider = ({ children }) => {
  const [state, setState] = useState(
    JSON.parse(window.localStorage.getItem("token"))
  );

  useEffect(() => {
    if (state) {
      return window.localStorage.setItem("token", JSON.stringify(state));
    } else {
      return window.localStorage.removeItem("token");
    }
  }, [state]);

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

export { Context, TokenProvider };
