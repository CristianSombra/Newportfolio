import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { imgCalendly } from "../../assets";
import "../../styles";
import { CalendlyWidget } from "../../components";

const Contact: React.FC = React.memo(() => {
    const [formControl, setFormControl] = useState({
        from_name: "",
        email: "",
        message: "",
    });

    const serviceID = 'service_w6wdapd';
    const templateID = 'template_zm1z7q4';
    
    const form = useRef<HTMLFormElement | null>(null);
    
    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
    
        // Validación el campo Email
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formControl.email)) {
          // Mensaje de error si el correo electrónico no es válido
        toast.error("Por favor, introduce una dirección de correo electrónico válida.");
          return; // Detiene el envío del formulario si el correo electrónico no es válido
        }

    if (form.current) {
            emailjs
            .sendForm(serviceID, templateID, form.current, "5_qXvhPuX4Xyj9IFk")
            .then((result) => {
                console.log(result.text);
                resetForm();
                toast.success("!Tu Mensaje fue enviado con éxito!");
            })
            .catch((error) => {
                console.error("Error al enviar el mensaje", error);
                toast.error("Hubo un problema al enviar tu mensaje. Por favor, inténtalo nuevamente más tarde.");
            });
        };
    };
    
    const resetForm = () => {
        setFormControl({
            from_name: "",
            email: "",
            message: "",
        });
    };
    
    const handleChage = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
    
        let isValid = true;
        let errorMessage = "";
    
        // Validación el campo Nombre y Apellido
        if (name === "from_name") {
            if (/[^a-zA-Z\s]/.test(value) || value.length > 20) {
                isValid = false;
                errorMessage =
                    "El campo Nombre solo acepta letras y espacios, con un máximo de 20 caracteres.";
            }
        }

        // Validación el campo Mensaje
        if (name === "message") {
            if (value.length > 300) {
                isValid = false;
                errorMessage = "El campo Mensaje solo puede tener un máximo de 300 caracteres.";
            }
        }
    
        if (isValid) {
            // Actualizar el estado del formulario solo si la entrada es válida
            setFormControl({
                ...formControl,
                [name]: value,
            });
        } else {
            // Mostrar mensaje de error
            toast.error(errorMessage);
        }
    };


    return(
        <div className="container container-contact py-2 py-md-5" id="Contact">            
            <section className="row d-flex justify-content-center mt-5">
                <div className="col-12 col-md-8 col-lg-6">
                    <h2>Cuéntame</h2>
                    <h1 className="text-white text-center">Tu Idea</h1>
                </div>
                <div className="col-12 col-md-10 my-5">
                    <p className="fs-4 text-center">Siempre dispuesto a escuchar propuestas e ideas, con gusto puedes escribirme o agendar una cita para un nuevo proyecto.</p>
                </div>
            </section>
            

            <section className="container mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-8 col-lg-5">
                        <form className="" onSubmit={sendEmail} ref={form}>
                            <motion.div 
                                className="row"
                                initial={{x: -50, opacity: 0, filter: 'blur(5px)'}}
                                animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                                transition={{duration: 1.6, delay: 0.6}}
                                >
                        <h2 className="text-white">Escríbeme</h2>

                                    <div className="col-12 col-md-6 mt-5 position-relative">
                                        <input 
                                            type="text" 
                                            className="custom-input" 
                                            placeholder=" " 
                                            required
                                            value={formControl.from_name}
                                            onChange={handleChage}
                                            name="from_name"
                                            id="from_name"
                                            />
                                        <label htmlFor="nombre" className="custom-label fs-5 ms-2">Nombre</label>
                                    </div>
                                    <div className="col-12 col-md-6 mt-5  position-relative">
                                        <input 
                                            type="text" 
                                            className="custom-input" 
                                            placeholder=" " 
                                            name="email"
                                            id="email"
                                            value={formControl.email}
                                            onChange={handleChage}
                                            required
                                            />
                                        <label htmlFor="email" className="fs-5 ms-2 custom-label">Email</label>
                                    </div>
                                    <div className="my-3 position-relative">
                                        <textarea 
                                            className="custom-input custom-area"
                                            placeholder=" " 
                                            name="message"
                                            id="message"
                                            cols={30}
                                            rows={10}
                                            value={formControl.message}
                                            onChange={handleChage}
                                            required
                                            >
                                                
                                            </textarea>
                                            <label htmlFor="mensaje" className="custom-label fs-5 ms-2">Mensaje</label>
                                    </div>
                                </motion.div>
                                <motion.div 
                                    className="col text-center text-lg-end"
                                    initial={{y: 50, opacity: 0, filter: 'blur(5px)'}}
                                    animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                                    transition={{duration: 1.8, delay: 0.8}}
                                    >
                                    <button 
                                        type="submit" 
                                        className="p-3 mt-4 mt-md-1 btn-custom-1"
                                        id="button" 
                                        value="Send Email"
                                        > 
                                        Enviar 
                                    </button>
                                </motion.div>
                        </form>
                    </div>
                    <div className="col-12 col-md-8 col-lg-5 mt-5 text-center">
                        <motion.div
                            initial={{x: 50, opacity: 0, filter: 'blur(5px)'}}
                            animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                            transition={{duration: 1.6, delay: 0.6}}
                            >
                            <img src={imgCalendly} alt="" className="img-fluid " style={{width: '308px'}}/>
                            <p>Programa una entrevista</p>
                        </motion.div>
                        <div className="mt-3">
                            <CalendlyWidget/>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
})

export default Contact;