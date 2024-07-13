import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import "@/styles";
import { ScrollTopFooter } from "../../components";

const Footer: React.FC = React.memo(() => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-auto">
                                <a 
                                    href="https://www.instagram.com/cristiansombra87/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="red-social"
                                    aria-label="Instagram de Cristian Sombra"
                                >
                                    <motion.div
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                        >
                                        <FontAwesomeIcon icon={faInstagram} className="icon-custom" />
                                    </motion.div>
                                </a>   
                            </div>
                            <div className="col-auto">
                                <a
                                    href="https://www.linkedin.com/in/cristiansombra"
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="red-social"
                                    aria-label="LinkedIn de Cristian Sombra"
                                >
                                    <motion.div
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.9 }}
                                        >
                                        <FontAwesomeIcon icon={faLinkedinIn} className="icon-custom" />
                                    </motion.div>
                                </a>   
                            </div>
                            <div className="col-auto">
                                <a 
                                    href="https://github.com/CristianSombra" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="red-social"
                                    aria-label="GitHub de Cristian Sombra"
                                >
                                    <motion.div
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 1.2 }}
                                        >
                                        <FontAwesomeIcon icon={faGithub} className="icon-custom" />
                                    </motion.div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center text-white my-3">
                        <div className="fs-6 me-1">Cristian Sombra - 2024</div>
                    </div>
                </div>
                    <ScrollTopFooter />
            </div>
        </footer>
    );
});

export default Footer;