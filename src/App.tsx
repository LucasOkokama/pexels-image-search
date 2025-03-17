import AppBody from "./components/AppBody";
import { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import { useState } from "react";

const darkTheme = {
  colors: {
    body: "#141414",
    text: "#f1f1f1",
    brand: "#a861bb",
  },
};

const lightTheme = {
  colors: {
    body: "#ffffff",
    text: "#000000",
    brand: "#730092",
  },
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
        <div className="max-w-5xl m-auto font-poppins pt-6">
          <Menu toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}></Menu>
        </div>
      </AppBody>
    </ThemeProvider>
  );
}

export default App;
