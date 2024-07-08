import React from "react";
import { motion } from "framer-motion";
import { AnimateProps, TimeLine } from "../../components";
import '@/styles';

const Trajectory: React.FC <AnimateProps> = React.memo(({animate}) => {
    return(
        <motion.section 
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
                    <h1 id="trajectory-heading" className="ms-5 ms-md-3">Mi</h1>
                    <h2 className="text-white text-center">Formación</h2>
                </div>
            </div>

            {/* Text */}
            <div className="row d-flex justify-content-center text-center my-4 my-md-5">
                <div className="col-12 col-md-11 col-lg-10">
                    <p>En mi formación me fortalecí en habilidades tecnológicas clave como HTML, CSS, JavaScript y Python, así como en herramientas y frameworks modernos como Figma, Bootstrap 5, React y Redux. Además, tengo experiencia en creación de servidores y bases de datos tanto SQL como NoSQL. Actualmente, estoy estudiando Ciencia de Datos e Inteligencia Artificial (AI), lo cual me mantiene a la vanguardia en el análisis de datos y el desarrollo de soluciones inteligentes.</p>
                </div>
            </div>

            {/* Timeline */}
            <TimeLine />
            
        </motion.section>
    );
});

export default Trajectory;