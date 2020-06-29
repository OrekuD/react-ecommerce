import React, { createContext, useState, useEffect } from "react";
import { URL } from "../constants/url";
// import { products as items } from "../dummy-data";
import Image from "../images/1.jpg";

const Context = createContext();

const Provider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userDetails, setUserDetails] = useState({
    name: "Fiifi Benson",
    email: "fiifi@gmail.com",
    image: Image,
  });

  useEffect(() => {
    fetch(`${URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.products);
        setProducts(data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    calculateCartTotal();
  }, [cart]);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const calculateCartTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.total));
    setCartTotal(total);
  };

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
        setCart(cart.filter((cartItem) => cartItem._id !== product._id));
        break;
      case "EMPTY":
        setCart([]);
        break;
      case "INCREASE":
        tempCart = [...cart];
        updatedProductIndex = tempCart.findIndex(
          (item) => item._id === product._id
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
          (item) => item._id === product._id
        );
        updatedProduct = tempCart[updatedProductIndex];
        if (updatedProduct.count === 1) {
          setCart(cart.filter((item) => item._id !== product._id));
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

  const getProduct = (product) => cart.find((item) => item._id === product._id);

  const logout = () => setIsLoggedIn(false);

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
        cartTotal,
        isLoggedIn,
        userDetails,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;
export { Provider, Context, Consumer };
