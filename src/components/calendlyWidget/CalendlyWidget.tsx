import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import "@/styles";


const CalendlyPopupButton: React.FC = React.memo(() => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const openCalendly = () => {
        if ((window as any).Calendly) {
            (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/cristiansombra87/entrevista' });
        } else {
            console.error("Calendly is not loaded yet.");
        }
    };

    return (
        <div>
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            <motion.div 
                className="col text-center text-lg-end"
                initial={{ y: 50, opacity: 0, filter: 'blur(5px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0)' }}
                transition={{ duration: 1.8, delay: 0.8 }}
            >
                <button 
                    onClick={openCalendly}
                    type="button" 
                    className="p-3 mt-5 btn-custom-1"
                    aria-label="Abrir Calendly para agendar una cita"
                    tabIndex={0}
                    role="button"
                >
                    Agenda
                </button>
            </motion.div>
        </div>
    );
});

export default CalendlyPopupButton;
