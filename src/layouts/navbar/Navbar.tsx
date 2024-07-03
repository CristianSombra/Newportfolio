import React from "react";
// import { motion } from "framer-motion";
// import { useScrollToSection } from "../../hooks";
// import "@/styles";


const Navbar: React.FC = React.memo(() => {
    
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container-fluid">
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center text-center" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a href="#Home" className="nav-link active" aria-current="page">Inicio</a>
                </li>
                <li className="nav-item">
                    <a href="#About" className="nav-link active" aria-current="page">Sobre mi</a>
                </li>
                <li className="nav-item">
                    <a href="#Trajectory" className="nav-link active" aria-current="page">Formación</a>
                </li>
                <li className="nav-item">
                    <a href="#Experience" className="nav-link active" aria-current="page">Experienca</a>
                </li>
                <li className="nav-item">
                    <a href="#Contact" className="nav-link active" aria-current="page">Contacto</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        
        )
})


export default Navbar;





// const Navbar: React.FC = React.memo(() => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
//     const { scrollToSection } = useScrollToSection();

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const closeMenu = () => {
//         setIsMenuOpen(false);
//     };

//     const handleCloseMenu = (id: string) => {
//         setTimeout(() => {
//             closeMenu();
//         }, 500);

//         scrollToSection(id)
//     };

//     useEffect(() => {
//         const handleResize = () => setIsDesktop(window.innerWidth >= 992);
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <nav className={`navbar navbar-expand-lg navbar-dark ${isDesktop && !isMenuOpen ? 'fixed-top fixed-top-desktop bg-none' : ''}`}>
//             <div className="container mt-3 d-flex justify-content-end">
//                     <div className={`custom-menu-button d-lg-none ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                     </div>
//                 <motion.div 
//                     initial={{ height: 0 }}
//                     animate={{ height: isMenuOpen ? 'auto' : 0 }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}
//                     className={`collapse navbar-collapse justify-content-center text-center ${isMenuOpen ? 'show' : ''}`}
//                     style={{ overflowY: isMenuOpen ? 'hidden' : 'visible' }}
//                     >
//                     <div className="navbar-nav mt-3 ms-auto">
//                         <a href="#Home" className="nav-link d-none d-md-none d-lg-block" onClick={() => handleCloseMenu("Home")}>Inicio</a>
//                         <a href="#About" className="nav-link" onClick={() => handleCloseMenu("About")}>Sobre mi</a>
//                         <a href="#Trajectory" className="nav-link" onClick={() => handleCloseMenu("Trajectory")}>Formación</a>
//                         <a href="#Experience" className="nav-link" onClick={() => handleCloseMenu("Experience")}>Experiencia</a>
//                         <a href="#Contact" className="nav-link" onClick={() => handleCloseMenu("Contact")}>Contacto</a>
//                     </div>
//                 </motion.div>
//             </div>
//         </nav>
//     );
// });

// export default Navbar;
