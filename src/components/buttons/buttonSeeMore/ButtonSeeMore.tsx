import React from "react";
import "@/styles";

export const ButtonSeeMore: React.FC = () => {
    return(
        <a href="#About">
            <button className="btn-father"> 
                <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">Ver más</span>
            </button>
        </a>
    );
}