import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScrollToSection } from "../../hooks";
import "@/styles";

const Navbar: React.FC = React.memo(() => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollToSection } = useScrollToSection();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleCloseMenu = (id: string) => {
        setTimeout(() => {
            closeMenu();
        }, 1000);

        scrollToSection(id)
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container mt-3 d-flex justify-content-end">
                    <div className={`custom-menu-button d-lg-none ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: isMenuOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`collapse navbar-collapse justify-content-center text-center ${isMenuOpen ? 'show' : ''}`}
                    style={{ overflowY: isMenuOpen ? 'hidden' : 'visible' }}
                    >
                    <div className="navbar-nav mt-3 ms-auto">
                        <a href="#Home" className="nav-link d-none d-md-none d-lg-block" onClick={() => handleCloseMenu("Home")}>Inicio</a>
                        <a href="#About" className="nav-link" onClick={() => handleCloseMenu("About")}>Sobre mi</a>
                        <a href="#Trajectory" className="nav-link" onClick={() => handleCloseMenu("Trajectory")}>Formación</a>
                        <a href="#Experience" className="nav-link" onClick={() => handleCloseMenu("Experience")}>Experiencia</a>
                        <a href="#Contact" className="nav-link" onClick={() => handleCloseMenu("Contact")}>Contacto</a>
                    </div>
                </motion.div>
            </div>
        </nav>
    );
});

export default Navbar;
