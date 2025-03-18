import AppBody from "./components/AppBody";
import { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import { useState } from "react";

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
    text: "#f1f1f1",
    brand: "#a861bb",
  },
  dimensions,
};

const lightTheme = {
  colors: {
    body: "#ffffff",
    text: "#000000",
    brand: "#730092",
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
        </div>
      </AppBody>
    </ThemeProvider>
  );
}

export default App;
