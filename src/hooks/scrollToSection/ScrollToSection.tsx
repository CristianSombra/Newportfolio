import { useRef } from "react";

const useScrollToSection = () => {
    const navRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });

            // Ajusta el desplazamiento adicional después de que la vista se haya desplazado
            const yOffset = -((navRef.current?.offsetHeight || 0) + 16); // Ajusta el valor 16 si hay algún margen adicional que quieras considerar
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return { scrollToSection, navRef };
};

export default useScrollToSection;
