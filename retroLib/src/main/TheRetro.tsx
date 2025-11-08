import React, {createContext, useState} from "react";
import "./TheRetro.css"

export const RetroThemeContext = createContext({
    palette: "gameboy",
    setPalette: (p: string) => {}
});

export const TheRetro: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [palette, setPalette] = useState("gameboy");

    return (
        <RetroThemeContext.Provider value={{palette, setPalette}}>
            <div className="retro-root">{children}</div>
        </RetroThemeContext.Provider>
    )
}

