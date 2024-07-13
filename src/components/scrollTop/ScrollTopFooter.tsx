import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import "@/styles";

const ScrollTopFooter: React.FC = () => {

    // Función para hacer scroll hacia arriba cuando se hace clic en el botón
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Desplazamiento suave
        });
    };

    return (
            
        <div className='col-12 d-block d-md-none'>
            <button id="scroll-to-top-footer" className="btn-custom-footer" onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    );
};

export default ScrollTopFooter;