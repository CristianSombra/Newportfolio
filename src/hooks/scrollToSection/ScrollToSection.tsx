import { useRef } from "react";

const useScrollToSection = () => {
    const navRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            // Obtener la altura del navbar
            const navHeight = navRef.current?.offsetHeight || 0;
            // Calcular el desplazamiento teniendo en cuenta la altura del navbar
            const yOffset = -navHeight - 0; // Ajustar el valor de -10 según sea necesario para el margen adicional
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return { scrollToSection, navRef };
};

export default useScrollToSection;
