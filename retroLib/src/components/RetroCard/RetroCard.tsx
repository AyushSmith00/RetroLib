import React, { useContext } from "react";
import "./RetroCard.css"
import { RetroThemeContext } from "../../main/TheRetro";

type CardProps = {
    children: React.ReactNode
};

export const RetroCard: React.FC<CardProps> = ({children}) => {

    const {palette} = useContext(RetroThemeContext)

    return (
        <div className={`retro-card retro-card-${palette}`}>{children}</div>
    )
}