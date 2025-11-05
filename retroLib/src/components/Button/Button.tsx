import React from "react";
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;   // text inside the button
  onClick?: () => void;        // optional click function
  disabled?: boolean;          // disable button
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button className="retro-btn" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};