import React from "react";
import "@/styles";

export const SpinnerLoading: React.FC = () => {
    return(
        <div className="container-spinner" aria-label="Cargando...">
            <div className="spinner"></div>
        </div>
    );
};