import React from "react";
import { motion } from "framer-motion";
import { SwiperProjects, AnimateProps } from "../../components";
import "@/styles";

const Experience: React.FC<AnimateProps> = ({ animate }) => {
    return(
        <motion.section 
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="container container-experience pt-md-5" 
            id="Experience"
            aria-labelledby="experience-heading"
            >
            
            {/* Title */}
            <div className="row d-flex justify-content-center py-5">
                <div className="col-12 col-md-9 col-lg-5">
                    <motion.h1 
                        id="experience-heading"
                        initial={{x:-20, opacity: 0}}
                        animate={animate ? {x: 0, opacity: 1} : {}}
                        transition={{duration: 0.6, delay: 0.2, ease: "easeInOut"}}
                        >
                            Mi
                    </motion.h1>
                    <motion.h2 
                        initial={{opacity: 0, filter: 'blur(8px)'}}
                        animate={animate ? {opacity: 1, filter: 'blur(0px)'} : {}}
                        transition={{duration: 0.6, delay: 0.3, ease: "easeInOut"}}
                        className="text-white text-center">
                            Experiencia
                    </motion.h2>
                </div>
            </div>

            {/* Text */}
            <div className="row d-flex justify-content-center text-center my-4 my-md-5">
                <div className="col-12 col-md-11 col-lg-10">
                    <p>Durante mi carrera, he adquirido experiencia significativa en proyectos estratégicos dentro de startups y en entornos freelance. Participé en simulaciones laborales en No Country, donde fortalecí mis habilidades blandas y técnicas, enfocándome en el trabajo en equipo y la implementación de MVP (Producto Mínimo Viable).</p>
                </div>
            </div>

            {/* My Projects */}
            
            <div className="row d-flex justify-content-center text-center my-4 mt-md-5">
                <div className="col-12">
                    <SwiperProjects />
                </div>
            </div>

        </motion.section>
    );
};

export default Experience;