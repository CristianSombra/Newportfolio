import React from "react";
import "@/styles";

export const MyPhoto: React.FC = React.memo(() => {
    return(
        <div 
            className="my-1 mb-5 mt-lg-0 mb-lg-0 text-center text-md-end ms-lg-4" 
            role="img" 
            aria-label="Foto de perfil de mi portafolio"
            >
            <img
                src={"https://res.cloudinary.com/cristiansombra/image/upload/v1746141108/Portfolio/NewSection/Home/Yo_udyrxa.webp"} 
                className="img-fluid img-custom"
                alt="Foto de perfil de mi portafolio"
                loading="lazy"
            />
        </div>
    );
});

