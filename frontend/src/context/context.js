import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Image from "../images/user.png";
import { URL } from "../constants/url";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Context = createContext();

const Provider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useLocalStorage("darkTheme", true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  const [cartTotal, setCartTotal] = useLocalStorage("cartTotal", 0);
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
  const [userDetails, setUserDetails] = useLocalStorage("useDetails", {});

  useEffect(() => {
    fetch(`${URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => (total += item.total));
    setCartTotal(total);
  }, [cart]);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
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
        console.log(response.data.token);
        setUserDetails({
          fullname: fullname,
          email: email,
          image: Image,
          token: response.data.token,
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
        if (isProductInCart(product)) {
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

  const isProductInCart = (product) =>
    cart.find((item) => item._id === product._id);

  const isProductInWishlist = (product) =>
    wishlist.find((item) => item._id === product._id);

  const modifyWishlist = (product) => {
    let tempWishlist = [...wishlist];
    if (isProductInWishlist(product)) {
      const productIndex = tempWishlist.findIndex(
        (item) => item._id === product._id
      );
      tempWishlist.splice(productIndex, 1);
      setWishlist(tempWishlist);
      return;
    }
    tempWishlist.unshift(product);
    setWishlist(tempWishlist);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserDetails({});
  };

  const state = {
    darkTheme,
    toggleTheme,
    setDarkTheme,
    products,
    cart,
    manageCart,
    isProductInCart,
    cartTotal,
    isLoggedIn,
    userDetails,
    logout,
    signin,
    signup,
    isProductInWishlist,
    modifyWishlist,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const Consumer = Context.Consumer;
export { Provider, Context, Consumer };
