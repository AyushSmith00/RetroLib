import React, {useState} from "react";
import "./Background.css"

export const Choosebackground: React.FC<{ children: React.ReactNode}> = ({children}) => {

    const retrobackgrounds = [
        "linear-gradient(135deg, #ff8a00, #e52e71)",
        "linear-gradient(135deg, #00c6ff, #0072ff)",
        "repeating-linear-gradient(45deg, #000, #000 10px, #222 10px, #222 20px)",
        "repeating-linear-gradient(90deg, #f00, #f00 10px, #ff0 10px, #ff0 20px)",
    ];

    const [index, setIndex] = useState(0);

    const ChangeBackground = () => {
        const switchBackground  = (index + 1) % retrobackgrounds.length;
        document.body.style.background = retrobackgrounds[index];
        setIndex(switchBackground)
    }

    return (
        <button className="retro-background" onClick={ChangeBackground}>
            {children}
        </button>
    )
}

