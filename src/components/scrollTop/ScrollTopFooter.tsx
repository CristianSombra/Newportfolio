import React from "react";
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
            
        <div className='col-12 d-block d-md-none my-3'>
            <button id="scroll-to-top-footer" className="btn-custom-footer fs-5" onClick={scrollToTop}>
                Volver a Inicio
            </button>
        </div>
    );
};

export default ScrollTopFooter;