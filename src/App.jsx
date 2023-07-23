// App.jsx
import "./assets/css/dark.css";
import { GlobalStyle } from "./components/styles/Global.styles";
import Tutorial from "./components/Tutorial";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./components/styles/Theme.styles";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Tutorial toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
}
