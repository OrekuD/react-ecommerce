import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Image from "../images/user.png";
import { URL } from "../constants/url";

const Context = createContext();

const Provider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    fetch(`${URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        console.log("asdf");
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

  const signup = (user) => {
    const { fullname, password, email } = user;
    axios({
      method: "POST",
      url: `${URL}/customer/signup`,
      data: {
        fullname: fullname,
        password: password,
        email: email,
      },
    })
      .then((response) => {
        console.log(response);
        setUserDetails({
          fullname: fullname,
          email: email,
          image: Image,
        });
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signin = (user) => {};

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
        signin,
        signup,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;
export { Provider, Context, Consumer };
