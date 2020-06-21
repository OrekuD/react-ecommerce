import React, { useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import { Context } from "./context/context";
import { Container } from "./styles/GlobalStyles";
import JosefinSans from "./fonts/JosefinSans.ttf";

// pages
import { Home, Cart, Profile, Product, Products, Checkout } from "./pages";

const GlobalStyle = createGlobalStyle`
    
    @font-face {
      font-family: "JosefinSans";
      src: url(${JosefinSans});
    }
    
    body {
      background-color: ${(props) => props.theme.background};
      font-family: "JosefinSans";
      margin: 0;
      padding: 0;
    }
  
`;

const dark = {
  background: "#212121",
  text: "#ffffff",
};

const light = {
  background: "#ffffff",
  text: "#121212",
};

const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "Profile", path: "/profile", component: Profile },
  { name: "Cart", path: "/cart", component: Cart },
  { name: "Product", path: "/product", component: Product },
  { name: "Checkout", path: "/checkout", component: Checkout },
  { name: "Products", path: "/products", component: Products },
];

const App = () => {
  const { darkTheme } = useContext(Context);

  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <GlobalStyle />
      <Header />
      <Container>
        {routes.map(({ name, path, component }) => (
          <Route key={name} path={path} exact component={component} />
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default App;
