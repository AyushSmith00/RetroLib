import React, { createContext, useState } from "react";
import "./TheRetro.css";

type RetroThemeContextType = {
  palette: string;
  setPalette: (p: string) => void;
};

export const RetroThemeContext = createContext<RetroThemeContextType>({
  palette: "crt",
  setPalette: () => {},
});

export const TheRetro: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [palette, setPalette] = useState("crt");

  return (
    <RetroThemeContext.Provider value={{ palette, setPalette }}>
      <div className={`retro-root ${palette}`}>{children}</div>
    </RetroThemeContext.Provider>
  );
};


