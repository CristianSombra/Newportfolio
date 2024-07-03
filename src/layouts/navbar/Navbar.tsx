import React, { useEffect, useState} from "react";
import { motion } from "framer-motion";
import "@/styles";


const Navbar: React.FC = React.memo(() => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        if(href) {
            const target = document.querySelector(href);
            if(target) {
                setIsMenuOpen(false);
                setTimeout(() => {
                    target.scrollIntoView({behavior: "smooth"});
                }, 20)
            }
        }
    };

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 992);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark mt-2 ${isDesktop && !isMenuOpen ? 'fixed-top fixed-top-desktop bg-none' : ''}`}>
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
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="#Home" className="nav-link active d-none d-md-none d-lg-block" onClick={closeMenu} aria-current="page">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#About" className="nav-link active" onClick={closeMenu} aria-current="page">Sobre mi</a>
                            </li>
                            <li className="nav-item">
                                <a href="#Trajectory" className="nav-link active" onClick={closeMenu} aria-current="page">Formación</a>
                            </li>
                            <li className="nav-item">
                                <a href="#Experience" className="nav-link active" onClick={closeMenu} aria-current="page">Experienca</a>
                            </li>
                            <li className="nav-item">
                                <a href="#Contact" className="nav-link active" onClick={closeMenu} aria-current="page">Contacto</a>
                            </li>
                        </ul>
                </motion.div>
            </div>
        </nav>
        
        )
})


export default Navbar;
