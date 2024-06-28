import React from "react";
import "@/styles";

export const MyPhoto: React.FC = React.memo(() => {
    return(
        <div className="mb-5">
            <img 
                src={"https://res.cloudinary.com/nursingstaff/image/upload/v1719562082/Portfolio/index/Sin_t%C3%ADtulo-removebg-preview_nh01cp.png"} 
                className="img-fluid col-12 col-md-9 col-lg-9 img-custom"
                alt="Mi foto"
                loading="lazy"
            />
        </div>
    );
});
