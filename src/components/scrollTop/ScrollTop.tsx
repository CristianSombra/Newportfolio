import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '@/styles';

const ScrollTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY > 300);
        };

        const throttledHandleScroll = throttle(handleScroll, 200);

        window.addEventListener("scroll", throttledHandleScroll);

        return () => {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button 
            id="scroll-to-top" 
            className="btn" 
            onClick={scrollToTop} 
            style={{ display: isVisible ? 'block' : 'none' }}
            aria-label="Scroll to top"
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
};

function throttle(fn: Function, wait: number) {
    let lastTime = 0;
    return function(...args: any) {
        const now = new Date().getTime();
        if (now - lastTime >= wait) {
            fn(...args);
            lastTime = now;
        }
    };
}

export default ScrollTop;