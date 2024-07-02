import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollToSection } from "../../hooks";
import "@/styles";

const Navbar: React.FC = React.memo(() => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
    const { scrollToSection, navRef } = useScrollToSection()

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleScroll = (id: string) => {
        scrollToSection(id);
        closeMenu();
    }

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 992);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav ref={navRef} className={`navbar navbar-expand-lg navbar-dark ${isDesktop && !isMenuOpen ? 'fixed-top fixed-top-desktop bg-none' : ''}`}>
            <div className="container mt-4 d-flex justify-content-end">
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
                    <div className="navbar-nav ms-auto">
                        <a href="#Home" className="nav-link d-none d-md-none d-lg-block" onClick={() => handleScroll("Home")}>Inicio</a>
                        <a href="#About" className="nav-link" onClick={() => handleScroll("About")}>Sobre mi</a>
                        <a href="#Trajectory" className="nav-link" onClick={() => handleScroll("Trajectory")}>Formación</a>
                        <a href="#Experience" className="nav-link" onClick={() => handleScroll("Experience")}>Experiencia</a>
                        <a href="#Contact" className="nav-link" onClick={() => handleScroll("Contact")}>Contacto</a>
                    </div>
                </motion.div>
            </div>
        </nav>
    );
});

export default Navbar;
