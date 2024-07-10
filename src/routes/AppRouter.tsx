import React from "react";
import { Navbar, Footer } from '../layouts';
import { ToastContainer } from "react-toastify";
import { ScrollTop } from '../components';
import { useScrollVisibility } from "../hooks";
import {
    Home,
    About,
    Trajectory,
    Experience,
    Contact
} from "../pages";


const AppRouter: React.FC = () => {
    const {
        homeRef,
        homeInView,
        aboutRef,
        aboutInView,
        trajectoryRef,
        trajectoryInView,
        experienceRef,
        experienceInView,
        contactRef,
        contactInView,
        isNavbarVisible
    } = useScrollVisibility();

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
