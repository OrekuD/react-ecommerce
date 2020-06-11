import React, { useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Route } from "react-router-dom";

import Alegreya from "./fonts/Alegreya-Regular.ttf";
import AlegreyaMedium from "./fonts/Alegreya-Medium.ttf";
import JosefinSans from "./fonts/JosefinSans.ttf";
import Exo from "./fonts/Exo2-VariableFont_wght.ttf";
import DMS from "./fonts/DMSerifDisplay-Regular.ttf";
import AVS from "./fonts/AveriaSerifLibre-Regular.ttf";

import Header from "./components/Header";
import { Context } from "./context/context";
import SideBar from "./components/SideBar";
import { Container, Routes } from "./styles/GlobalStyles";

// pages
import Home from "./pages/Home";
import Lifestyle from "./pages/Lifestyle";
import Electronics from "./pages/Electronics";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Gaming from "./pages/Gaming";
import HomeEquipment from "./pages/HomeEquipment";

const GlobalStyle = createGlobalStyle`

    @font-face {
      font-family: "Alegreya";
      src: url(${Alegreya});
    }
    @font-face {
      font-family: "AlegreyaMedium";
      src: url(${AlegreyaMedium});
    }

    @font-face {
      font-family: "JosefinSans";
      src: url(${JosefinSans});
    }
    
    @font-face {
      font-family: "Exo";
      src: url(${Exo});
    }
    @font-face {
      font-family: "DMS";
      src: url(${DMS});
    }
    
    @font-face {
      font-family: "AVS";
      src: url(${AVS});
    }
    

    body {
      overflow: hidden;
      background-color: ${(props) => props.theme.background}
    }
  
`;

const dark = {
  background: "#121212",
  text: "#ffffff",
};

const light = {
  background: "#ffffff",
  text: "#121212",
};

const App = () => {
  const { darkTheme } = useContext(Context);

  const routes = [
    { name: "Home", path: "/", component: Home },
    { name: "Profile", path: "/profile", component: Profile },
    { name: "Life style", path: "/lifestyle", component: Lifestyle },
    { name: "Cart", path: "/cart", component: Cart },
    { name: "Checkout", path: "/checkout", component: Checkout },
    { name: "Electronics", path: "/electronics", component: Electronics },
    { name: "Wishlist", path: "/wishlist", component: Wishlist },
    { name: "Gaming", path: "/gaming", component: Gaming },
    {
      name: "Home equipment",
      path: "/home-equipment",
      component: HomeEquipment,
    },
  ];

  return (
    <>
      <ThemeProvider theme={darkTheme ? dark : light}>
        <GlobalStyle />
        <Header />
        <Container>
          <SideBar />
          <Routes>
            {routes.map(({ name, path, component }) => (
              <Route path={path} exact component={component} />
            ))}
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
