import React from "react";
import { motion } from "framer-motion";
import { AnimateProps } from "../../components";
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
                    <motion.h1 
                        id="trajectory-heading"
                        initial={{x:-20, opacity: 0}}
                        animate={animate ? {x: 0, opacity: 1} : {}}
                        transition={{duration: 0.6, delay: 0.2, ease: "easeInOut"}}
                        className="ms-5 ms-md-3"
                        >
                            Mi
                    </motion.h1>
                    <motion.h2 
                        initial={{opacity: 0, filter: 'blur(8px)'}}
                        animate={animate ? {opacity: 1, filter: 'blur(0px)'} : {}}
                        transition={{duration: 0.6, delay: 0.3, ease: "easeInOut"}}
                        className="text-white text-center">
                            Formación
                    </motion.h2>
                </div>
            </div>

            {/* Text */}
            <div className="row d-flex justify-content-center text-center my-4 my-md-5">
                <div className="col-12 col-md-11 col-lg-10">
                    <p>Habilidades tecnológicas clave como HTML, CSS, JavaScript y Python, así como en herramientas y frameworks modernos como Figma, Bootstrap 5, React y Redux. Además, creación de servidores y bases de datos tanto SQL como NoSQL. Cursando actualmente Ciencia de Datos e Inteligencia Artificial (AI).</p>
                </div>
            </div>

            {/* Timeline */}
            {/* <TimeLine /> */}
            
        </motion.section>
    );
});

export default Trajectory;