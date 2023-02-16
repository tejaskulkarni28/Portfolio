import React from "react";
import "./LoadingAnimation";

const LoadingAnimation = ()=>{
    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
      
        loader.classList.add("loader--hidden");
      
        loader.addEventListener("transitionend", () => {
          document.body.removeChild(loader);
        });
      });
      
    return(
        <div className="loader"></div>
    )
}

export default LoadingAnimation;