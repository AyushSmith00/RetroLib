import React, {createContext, useState} from "react";
import "./TheRetro.css"

export const RetroThemeContext = createContext({
    palette: "crt",
    setPalette: (p: string) => {}
});

export const TheRetro: React.FC<{children: React.ReactNode,}> = ({children}) => {

    const [palette, setPalette] = useState("crt");

    return (
        <RetroThemeContext.Provider value={{palette, setPalette}}>
            <div className={`retro-root ${palette}`}>{children}</div>
        </RetroThemeContext.Provider>
    )
}

