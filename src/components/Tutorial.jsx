import Card from "./Card";
import { Container } from "./styles/Container.styles";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Tutorial({ toggleTheme }) {
  const [mode, setMode] = useState("dark");

  return (
    <>
      <Container>
        <Card />
        <DarkModeToggle
          mode={mode}
          dark="Dark"
          light="Light"
          size="sm"
          inactiveTrackColor="#e2e8f0"
          inactiveTrackColorOnHover="#f8fafc"
          inactiveTrackColorOnActive="#cbd5e1"
          activeTrackColor="#334155"
          activeTrackColorOnHover="#1e293b"
          activeTrackColorOnActive="#0f172a"
          inactiveThumbColor="#1e293b"
          activeThumbColor="#e2e8f0"
          onChange={(mode) => {
            toggleTheme();
            setMode(mode);
          }}
        />
      </Container>
    </>
  );
}
