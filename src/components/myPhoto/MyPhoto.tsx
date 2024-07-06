import React from "react";
import "@/styles";

export const MyPhoto: React.FC = React.memo(() => {
    return(
        <div className="mb-5">
            <img 
                src={"https://res.cloudinary.com/nursingstaff/image/upload/v1720249833/Portfolio/index/home_wled3h.webp"} 
                className="img-fluid col-12 col-md-9 col-lg-9 img-custom"
                alt="Mi foto"
                loading="lazy"
            />
        </div>
    );
});
