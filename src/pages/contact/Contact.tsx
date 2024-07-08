import React from "react";
import { motion } from "framer-motion";
import { imgCalendly } from "../../assets";
import { CalendlyWidget, AnimateProps, FormContact } from "../../components";
import "@/styles";

const Contact: React.FC<AnimateProps> = React.memo(({ animate }) => {
    const handleFormSuccess = () => {
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="container container-contact my-2 py-md-3"
            id="Contact"
            aria-labelledby="contact-heading"
        >
            <section className="row d-flex justify-content-center py-5">
                <div className="col-12 col-md-8 col-lg-6">
                    <h1 id="contact-heading">Cuéntame</h1>
                    <h2 className="text-white text-center">Tu Idea</h2>
                </div>
                <div className="col-12 col-md-10 my-5">
                    <p className="fs-4 text-center">
                        Siempre estoy disponible para escuchar propuestas e ideas. No dudes en contactarme o programar una cita para discutir nuevos proyectos.
                    </p>
                </div>
            </section>

            <section className="container mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-8 col-lg-4">
                        <FormContact onSuccess={handleFormSuccess} />
                    </div>
                    <div className="col-12 col-md-8 col-lg-5 mt-5 text-center">
                        <div>
                            <img src={imgCalendly} alt="Calendly" className="img-fluid " style={{ width: '322px' }} />
                            <p>Programa una entrevista</p>
                        </div>
                        <div className="mt-4">
                            <CalendlyWidget />
                        </div>
                    </div>
                </div>
            </section>
        </motion.section>
    );
});

export default Contact;
