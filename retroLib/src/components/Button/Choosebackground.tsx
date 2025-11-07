import React, { useState } from "react";
import "./Background.css";

export const Choosebackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const backgrounds = [
    "bg-1",
    "bg-2",
    "bg-3",
    "bg-4"
  ];

  const [index, setIndex] = useState(0);

  const ChangeBackground = () => {
    setIndex((prev) => (prev + 1) % backgrounds.length);
  };

  return (
    <div className={`background-wrapper ${backgrounds[index]}`}>

      {index === 0 && (
        <>
          <div className="stars"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          </>
      )}

      {index === 1 && (
        <>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          </div>
          </>
      )}

      {index === 2 && (
        <>
        <div>
          <div className="bg3"></div>
        </div>
        </>
      )}

      {/* Your Button */}
      <button className="retro-background" onClick={ChangeBackground}>
        {children}
      </button>
    </div>
  );
};


