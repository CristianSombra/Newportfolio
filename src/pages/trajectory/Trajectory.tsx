import React from "react";
import { motion } from "framer-motion";
import { AnimateProps, TimeLine } from "../../components";
import '@/styles';

const Trajectory: React.FC <AnimateProps> = React.memo(({animate}) => {
    return(
        <motion.div 
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="container container-trajectory pb-2 py-md-5" 
            id="Trajectory"
            aria-labelledby="trajectory-heading"
            >
            
            {/* Title */}
            <div className="row d-flex justify-content-center py-5">
                <div className="col-12 col-md-8 col-lg-5">
                    <h2 className="ms-5 ms-md-3">Mi</h2>
                    <h1 id="trajectory-heading" className="text-white text-center">Formación</h1>
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
            
        </motion.div>
    );
});

export default Trajectory;