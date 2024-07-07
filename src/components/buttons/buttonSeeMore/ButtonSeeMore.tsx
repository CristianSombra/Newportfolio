import React from "react";
import "@/styles";

export const ButtonSeeMore: React.FC = () => {
    return(
        <a href="#About" role="button">
            <button className="btn-father" aria-label="Ver más sobre nosotros" tabIndex={0}> 
                <span className="circle" aria-hidden="true" >
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">Ver más</span>
            </button>
        </a>
    );
}