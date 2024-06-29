import React from "react";
import { TechnologiesCarousel, Cards } from "../../components/";
import '@/styles';

const About: React.FC = () => {
    return(
        <div className="container container-about py-2 py-md-5" id="About">
            
            {/* Title */}
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="row d-flex justify-content-start">
                        <div className="col-12">
                            <h2>Hola! <span className="text-white">Soy</span></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white text-center">Cristian Sombra</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text */}
            <div className="row d-flex justify-content-center text-center my-4 my-md-5">
                <div className="col-12 col-md-11 col-lg-10">
                    <p>Soy un desarrollador que busca crear experiencias digitales excepcionales. Desde el frontend hasta el backend, mi enfoque se centra en transformar ideas creativas en soluciones funcionales.</p>
                </div>
            </div>

            {/* Tecnologies */}
            <TechnologiesCarousel />

            {/* Services */}
            <Cards />

        </div>
    );
};

export default About;   