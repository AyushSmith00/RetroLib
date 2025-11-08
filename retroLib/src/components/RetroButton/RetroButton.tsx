import React, { useContext } from "react";
import { RetroThemeContext } from "../../main/TheRetro";
import "./RetroButton.css";

type RetroButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;

}

export const RetroButton: React.FC<RetroButtonProps> = ({ children, onClick }) => {
  const { palette } = useContext(RetroThemeContext); // <— reads current theme

  return (
    <button className={`retro-btn ${palette}`} onClick={onClick}>
      {children}
    </button>
  );
};
