import React, { createContext, useState, useEffect } from "react";
import { products as items } from "../dummy-data";

const Context = createContext();

const Provider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(items);
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const manageCart = (action, product) => {
    let tempCart = [];
    let updatedProduct = {};
    let updatedProductIndex = 0;
    switch (action) {
      case "ADD":
        if (getProduct(product)) {
          console.log("a");
          return;
        }
        product.count = 1;
        product.total = product.price;
        setCart([...cart, product]);
        break;
      case "REMOVE":
        setCart(cart.filter((cartItem) => cartItem.id !== product.id));
        break;
      case "EMPTY":
        setCart([]);
        break;
      case "INCREASE":
        tempCart = [...cart];
        updatedProductIndex = tempCart.findIndex(
          (item) => item.id === product.id
        );
        updatedProduct = tempCart[updatedProductIndex];
        updatedProduct.count++;
        updatedProduct.total = updatedProduct.count * updatedProduct.price;
        tempCart[updatedProductIndex] = updatedProduct;
        setCart(tempCart);
        break;
      case "DECREASE":
        tempCart = [...cart];
        updatedProductIndex = tempCart.findIndex(
          (item) => item.id === product.id
        );
        updatedProduct = tempCart[updatedProductIndex];
        if (updatedProduct.count === 1) {
          setCart(cart.filter((item) => item.id !== product.id));
          return;
        }
        console.log("87");
        updatedProduct.count--;
        updatedProduct.total = updatedProduct.count * updatedProduct.price;
        tempCart[updatedProductIndex] = updatedProduct;
        setCart(tempCart);
        break;
      default:
        break;
    }
  };

  const getProduct = (product) => {
    return cart.find((item) => item.id === product.id);
  };

  return (
    <Context.Provider
      value={{
        darkTheme,
        toggleTheme,
        setDarkTheme,
        products,
        cart,
        manageCart,
        getProduct,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;
export { Provider, Context, Consumer };
