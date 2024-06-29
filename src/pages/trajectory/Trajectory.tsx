import React from "react";
import { TimeLine } from "../../components";
import '@/styles';

const Trajectory: React.FC = React.memo(() => {
    return(
        <div className="container container-trajectory py-2 py-md-5" id="Trajectory">
            
            {/* Title */}
            <div className="row d-flex justify-content-center py-5">
                <div className="col-12 col-md-8 col-lg-5">
                    <h2 className="ms-5 ms-md-3">Mi</h2>
                    <h1 className="text-white text-center">Formación</h1>
                </div>
            </div>

            {/* Text */}
            <div className="row d-flex justify-content-center text-center my-4 my-md-5">
                <div className="col-12 col-md-11 col-lg-10">
                    <p>Mi formación abarcada tecnologías como HTML, CSS, JavaScript, y el uso de herramientas y frameworks modernos como Figma, Bootstrap 5, React, Redux, y bases de datos SQL y NoSQL. Actualmente, soy estudiante de la carrera de Ciencia de Datos e Inteligencia Artificial (AI), lo que me permite estar a la vanguardia en el análisis de datos y el desarrollo de soluciones inteligentes. Comprometido con la formación continua.</p>
                </div>
            </div>

            {/* Timeline */}
            <TimeLine />
            
        </div>
    );
});

export default Trajectory;