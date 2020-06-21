import React, { createContext, useState, useEffect } from "react";
import { products as items } from "../dummy-data";

const Context = createContext();

const Provider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setProducts(items);
  }, []);

  useEffect(() => {
    calculateCartTotal()
  }, [cart]);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const calculateCartTotal = () => {
    let total = 0;
    cart.forEach(item => total += item.total);
    setCartTotal(total);
  }

  const manageCart = (action, product) => {
    let tempCart = [];
    let updatedProduct = {};
    let updatedProductIndex = 0;
    switch (action) {
      case "ADD":
        if (getProduct(product)) {
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
        cartTotal
      }}
    >
      {children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;
export { Provider, Context, Consumer };
