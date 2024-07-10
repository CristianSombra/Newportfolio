import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const usePageVisibility = () => {
    const [homeRef, homeInView] = useInView({ threshold: 0.40 });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.20 });
    const [trajectoryRef, trajectoryInView] = useInView({ threshold: 0.20 });
    const [experienceRef, experienceInView] = useInView({ threshold: 0.20 });
    const [contactRef, contactInView] = useInView({ threshold: 0.20 });
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
        setIsNavbarVisible(isDesktop || aboutInView || trajectoryInView || experienceInView || contactInView);
    }, [isDesktop, aboutInView, trajectoryInView, experienceInView, contactInView]);

    return { 
        refs: { homeRef, aboutRef, trajectoryRef, experienceRef, contactRef },
        inView: { homeInView, aboutInView, trajectoryInView, experienceInView, contactInView },
        isNavbarVisible 
    };
};

export default usePageVisibility;
