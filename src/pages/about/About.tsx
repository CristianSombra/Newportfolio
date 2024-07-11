import React from "react";
import { motion } from "framer-motion";
import { TechnologiesCarousel, Cards, AnimateProps } from "../../components/";
import '@/styles';

const About: React.FC<AnimateProps>= ({ animate }) => {

    return(
        <motion.section 
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="container container-about py-2 py-md-5" 
            id="About"
            aria-labelledby="about-heading"
            role="main"
            >
            
            {/* Title */}
            <div className="row d-flex justify-content-center py-5">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="row d-flex justify-content-start">
                        <div className="col-12">
                            <motion.h1 
                                id="about-heading"
                                initial={{x:-50, opacity: 0}}
                                animate={animate ? {x: 0, opacity: 1} : {}}
                                transition={{duration: 0.6, delay: 0.2, ease: "easeInOut"}}
                                >
                                    Hola!<span className="text-white" aria-hidden="true">Soy</span>
                            </motion.h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <motion.h2 
                                initial={{opacity: 0, filter: 'blur(8px)'}}
                                animate={animate ? {opacity: 1, filter: 'blur(0px)'} : {}}
                                transition={{duration: 0.6, delay: 0.3, ease: "easeInOut"}}
                                className="text-white text-center">
                                    Cristian Sombra
                            </motion.h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text */}
            <div className="row d-flex justify-content-center text-center my-4 my-md-5">
                <div className="col-12 col-md-11 col-lg-10">
                    <p>Soy un desarrollador que busca crear experiencias digitales excepcionales. Desde el frontend hasta el backend, mi enfoque se centra en transformar ideas creativas en soluciones funcionales y efectivas para mis clientes y usuarios finales.</p>
                </div>
            </div>

            {/* Tecnologies */}
            <TechnologiesCarousel />

            {/* Services */}
            <Cards />

        </motion.section>
    );
};

export default About;   