import React from "react";
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;         
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button className="retro-btn" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};