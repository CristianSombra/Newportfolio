import React, { useState, useEffect } from "react";
import AnimateProps from "../props/animateSection/AnimateSection";

const DisplayText: React.FC<AnimateProps> = ({ animate }) => {
    const fullText = "Full Stack";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        let timer: NodeJS.Timeout | null = null;

        if (animate) {
            timer = setInterval(() => {
                setDisplayedText((prev) => {
                    if (index < fullText.length) {
                        return fullText.slice(0, index + 1);
                    } else {
                        clearInterval(timer as NodeJS.Timeout);
                        return prev;
                    }
                });
                index += 1;
            }, 90);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [animate]);

    // Renderizamos solo el texto en lugar de retornar el componente
    return <>{displayedText}</>;
};

export default DisplayText;
