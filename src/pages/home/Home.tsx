import React from "react";
import { motion } from "framer-motion";
import { ButtonsDesktop, ButtonsMobile, ButtonSeeMore, MyPhoto, AnimateProps } from "../../components";
import '@/styles';

const Home: React.FC<AnimateProps>= ({ animate }) => {
    return(
        <motion.section 
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="container-fluid py-2 py-md-5 mt-5 container-home" 
            id="Home"
            aria-labelledby="home-heading"
            role="banner"
            >
            
            <div className="row d-flex justify-content-center py-0 mb-lg-2 mt-lg-4">
                
                {/* Title */}
                <div className="col-12 col-md-5 col-lg-4 mt-0 mt-md-3">
                    <h1 id="home-heading">Cristian Sombra</h1>
                    <h2>Full Stack</h2>
                    <h3>Developer</h3>

                    {/* Botones desktop */}
                    <ButtonsDesktop />

                    <div className="row d-flex justify-content-center mt-lg-5">
                        <div className="col-12 d-none d-lg-block mt-lg-4">
                            <p>Apasionado del <strong style={{color: '#04D004'}}>código</strong> y amante de los desafíos.</p>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="col-12 col-md-6 col-lg-4 text-end text-lg-center">
                    <MyPhoto />
                </div>

                {/* Buttons mobile */}
                <ButtonsMobile />
            </div>

            {/* Text */}
            <div className="row d-flex justify-content-center text-center mt-5 my-md-0">
                <div className="col-12 d-block d-lg-none mt-5">
                    <p>Apasionado del <strong style={{color: '#04D004'}}>código</strong> y amante de los desafíos.</p>
                </div>
            </div>

            <div className="row d-flex justify-content-center text-center mt-3">
                <div className="col-12 d-none d-lg-block">
                    <ButtonSeeMore/>
                </div>
            </div>

        </motion.section>
    );
};

export default Home;