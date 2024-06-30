import { useRef } from "react";

const useScrollToSection = () => {
    const navRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });

            const yOffset = -((navRef.current?.offsetHeight || 0) - 60);
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return { scrollToSection, navRef };
};

export default useScrollToSection;
