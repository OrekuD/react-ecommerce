import React, { createContext, useState, useEffect } from "react";
import { products as items } from "../dummy-data";

const Context = createContext();

const Provider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(items);
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Context.Provider
      value={{ darkTheme, toggleTheme, setDarkTheme, products }}
    >
      {children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;
export { Provider, Context, Consumer };
