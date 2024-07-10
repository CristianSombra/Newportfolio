import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useScrollVisibility = () => {
    const [homeRef, homeInView] = useInView({ threshold: 0.30 });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.25 });
    const [trajectoryRef, trajectoryInView] = useInView({ threshold: 0.25 });
    const [experienceRef, experienceInView] = useInView({ threshold: 0.25 });
    const [contactRef, contactInView] = useInView({ threshold: 0.25 });
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth <= 992);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth <= 992);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isDesktop) {
            setIsNavbarVisible(true);
        } else if (aboutInView || trajectoryInView || experienceInView || contactInView) {
            setIsNavbarVisible(true);
        } else {
            setIsNavbarVisible(false);
        }
    }, [isDesktop, aboutInView, trajectoryInView, experienceInView, contactInView]);

    return {
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
    };
};

export default useScrollVisibility;
