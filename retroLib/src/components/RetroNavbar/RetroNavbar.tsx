import React, { useContext } from "react";
import "./RetroNavbar.css"
import { RetroThemeContext } from "../../main/TheRetro";

type RetroNavbarprop = {
    children: React.ReactNode
};

export const RetroNavbar: React.FC<RetroNavbarprop> = ({children}) => {

    const {palette} = useContext(RetroThemeContext)
    return (
        <nav className= {`retro-nav ${palette}`}>{children}</nav>
    )
}