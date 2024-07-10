import React, { useState, useEffect } from "react";
import {
    Home,
    About,
    Trajectory,
    Experience,
    Contact
} from "../pages";
import { useInView } from "react-intersection-observer";
import { Navbar, Footer } from '../layouts';
import { ToastContainer } from "react-toastify";
import { ScrollTop } from '../components';


const AppRouter: React.FC = () => {
    const [homeRef, homeInView] = useInView({ threshold: 0.30 });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.25 });
    const [trajectoryRef, trajectoryInView] = useInView({ threshold: 0.25 });
    const [experienceRef, experienceInView] = useInView({ threshold: 0.25 });
    const [contactRef, contactInView] = useInView({ threshold: 0.25 });
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth <= 992);


    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth <= 992)
        };
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    useEffect(() => {
        if (isDesktop) {
            setIsNavbarVisible(true)
        }
        else if (aboutInView || trajectoryInView || experienceInView || contactInView) {
            setIsNavbarVisible(true);
        }
        else setIsNavbarVisible(false);
    }, [isDesktop, aboutInView, trajectoryInView, experienceInView, contactInView]);


    return(
        <>
        {isNavbarVisible && <Navbar />}
            <div ref={homeRef}>
                <Home animate={homeInView} />
            </div>
            <div ref={aboutRef}>
                <About animate={aboutInView} />
            </div>
            <div ref={trajectoryRef}>
                <Trajectory animate={trajectoryInView} />
            </div>
            <div ref={experienceRef}>
                <Experience animate={experienceInView} />
            </div>
            <div ref={contactRef}>
                <Contact animate={contactInView} />
            </div>
            <Footer />
            <ScrollTop />
            <ToastContainer />
        </>
    );
};

export default AppRouter;
