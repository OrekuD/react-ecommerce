import React, { useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Alegreya from "./fonts/Alegreya-Regular.ttf";
import AlegreyaMedium from "./fonts/Alegreya-Medium.ttf";
import JosefinSans from "./fonts/JosefinSans.ttf";
import Exo from "./fonts/Exo2-VariableFont_wght.ttf";
import DMS from "./fonts/DMSerifDisplay-Regular.ttf";
import AVS from "./fonts/AveriaSerifLibre-Regular.ttf";

import Header from "./components/Header";
import { Context } from "./context/context";

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

function App() {
  const { darkTheme } = useContext(Context);
  console.log(darkTheme);
  return (
    <>
      <ThemeProvider theme={darkTheme ? dark : light}>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
