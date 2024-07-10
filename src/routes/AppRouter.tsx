import React from "react";
import { Navbar, Footer } from '../layouts';
import { ToastContainer } from "react-toastify";
import { ScrollTop } from '../components';
import { usePageVisibility } from "../hooks";
import {
    Home,
    About,
    Trajectory,
    Experience,
    Contact
} from "../pages";


const AppRouter: React.FC = () => {
    const { refs, inView, isNavbarVisible } = usePageVisibility();

    return(
        <>
        {isNavbarVisible && <Navbar />}
            <div ref={refs.homeRef}>
                <Home animate={inView.homeInView} />
            </div>
            <div ref={refs.aboutRef}>
                <About animate={inView.aboutInView} />
            </div>
            <div ref={refs.trajectoryRef}>
                <Trajectory animate={inView.trajectoryInView} />
            </div>
            <div ref={refs.experienceRef}>
                <Experience animate={inView.experienceInView} />
            </div>
            <div ref={refs.contactRef}>
                <Contact animate={inView.contactInView} />
            </div>
            <Footer />
            <ScrollTop />
            <ToastContainer />
        </>
    );
};

export default AppRouter;
