import AppBody from "./components/AppBody";
import { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import { useState } from "react";
import SearchBox from "./components/SearchBox";
import { StyledParagraph } from "./components/styles/StyledParagraph";

const dimensions = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

const darkTheme = {
  colors: {
    body: "#141414",
    brand: "#a861bb",

    sup: "#f1f1f1",

    phrase: "#8b8b8b",

    border: "#424344",

    placeholder: "#696c6d",

    hoverTag: "#2c1636",
  },
  dimensions,
};

const lightTheme = {
  colors: {
    body: "#ffffff",
    brand: "#730092",

    sup: "#000000",

    phrase: "#6b6b6b",

    border: "#E2E8F0",

    placeholder: "#adb1b6",

    hoverTag: "#fbf1ff",
  },
  dimensions,
};

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <AppBody>
        <div className="max-w-5xl m-auto font-poppins pt-6 px-6 md:px-14">
          <Menu toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}></Menu>

          <div className="max-w-xl m-auto mt-22">
            <StyledParagraph>
              Explore a variety of categories, discover stunning images, and
              find exactly what you're looking for all in one place.
            </StyledParagraph>

            <SearchBox></SearchBox>
          </div>
        </div>
      </AppBody>
    </ThemeProvider>
  );
}

export default App;
