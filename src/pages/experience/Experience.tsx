import React from "react";
import "@/styles";
import { SwiperProjects } from "../../components";

const Experience: React.FC = React.memo(() => {
    return(
        <div className="container container-experience py-2 py-md-5" id="Experience">
            
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
                <div className="col-12 col-md-11 col-lg-10">
                    <SwiperProjects />
                </div>
            </div>

        </div>
    );
});

export default Experience;