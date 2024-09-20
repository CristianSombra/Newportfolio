import React from "react";
import "@/styles";

export const MyPhoto: React.FC = React.memo(() => {
    return(
        <div className="my-5 mt-lg-0 mb-lg-5 text-center text-md-end" role="img" aria-label="Foto de perfil de mi portafolio">
            <img
                src={"https://res.cloudinary.com/nursingstaff/image/upload/v1726846964/Portfolio/NewSection/Home/yo_lev8cu.webp"} 
                className="img-fluid img-custom"
                alt="Foto de perfil de mi portafolio"
                loading="lazy"
            />
        </div>
    );
});
