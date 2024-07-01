import React from "react";
import { motion } from "framer-motion";
import { SwiperProjects, AnimateProps } from "../../components";
import "@/styles";

const Experience: React.FC<AnimateProps> = ({ animate }) => {
    return(
        <motion.div 
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="container container-experience mt-5" 
            id="Experience"
            >
            
            {/* Title */}
            <div className="row d-flex justify-content-center py-5">
                <div className="col-12 col-md-9 col-lg-5">
                    <h2>Mi</h2>
                    <h1 className="text-white text-center">Experiencia</h1>
                </div>
            </div>

            {/* Text */}
            <div className="row d-flex justify-content-center text-center my-4 my-md-5">
                <div className="col-12 col-md-11 col-lg-10">
                    <p>He acumulado una valiosa experiencia en proyectos estratégicos tanto en startups como en entornos freelance. Durante mi participación en simulaciones laborales en No Country, he fortalecido tanto mis soft skills como mis tech skills, enfocándome especialmente en potenciar el trabajo en equipo y la implementación de MVP (Minimum Viable Product).</p>
                </div>
            </div>

            {/* My Projects */}
            
            <div className="row d-flex justify-content-center text-center my-4 mt-md-5">
                <div className="col-12">
                    <SwiperProjects />
                </div>
            </div>

        </motion.div>
    );
};

export default Experience;