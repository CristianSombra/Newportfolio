import React, { Suspense } from "react";
import { useInView } from 'react-intersection-observer';
import { Navbar, Footer } from '../layouts';
import { ToastContainer } from "react-toastify";
import { SpinnerLoading, ScrollTop } from '../components';
import {
    Home,
    About,
    Trajectory,
    Experience,
    Contact
} from "../pages";


const AppRouter: React.FC = () => {
    const [homeRef, homeInView] = useInView({ threshold: 0.40 });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.20 });
    const [trajectoryRef, trajectoryInView] = useInView({ threshold: 0.20 });
    const [experienceRef, experienceInView] = useInView({ threshold: 0.20 });
    const [contactRef, contactInView] = useInView({ threshold: 0.20 });


    return (
        <>
            <Navbar />
            <div ref={homeRef}>
                <Suspense fallback={<SpinnerLoading />}>
                    <Home animate={homeInView} />
                </Suspense>
            </div>
            <div ref={aboutRef}>
                <Suspense fallback={<SpinnerLoading />}>
                    <About animate={aboutInView} />
                </Suspense>
            </div>
            <div ref={trajectoryRef}>
                <Suspense fallback={<SpinnerLoading />}>
                    <Trajectory animate={trajectoryInView} />
                </Suspense>
            </div>
            <div ref={experienceRef}>
                <Suspense fallback={<SpinnerLoading />}>
                    <Experience animate={experienceInView} />
                </Suspense>
            </div>
            <div ref={contactRef}>
                <Suspense fallback={<SpinnerLoading />}>
                    <Contact animate={contactInView} />
                </Suspense>
            </div>
            <Footer />
            <ScrollTop />
            <ToastContainer />
        </>
    );
};

export default AppRouter;
