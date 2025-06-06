import React from "react";
// import { useDownloadPdf } from "../../../hooks";
import "@/styles"

const ButtonsDesktop: React.FC = React.memo(() => {
    // const { downloadPdf } = useDownloadPdf();

    // const handleDownloadPdf = () => {
    //     const pdfCurriculum = '/Cristian Sombra.pdf'
    //     downloadPdf(pdfCurriculum)
    // }

    return(
        // <div className=" mt-0 mt-md-4">
            <div className="mt-md-4 d-none d-md-block">
                <div className="py-3">
                    <a href="#Contact" role="button">
                        <button className="btn-custom" aria-label="Ir a la sección de contacto" tabIndex={0}>
                            Contáctame
                        </button>
                    </a>
                </div>
            </div>
        // </div>
    );
});

const ButtonsMobile: React.FC = React.memo(() => {
    // const { downloadPdf } = useDownloadPdf();

    // const handleDownloadPdf = () => {
    //     const pdfCurriculum = '/Cristian Sombra.pdf'
    //     downloadPdf(pdfCurriculum)
    // }

    return(
        <div className="row d-flex justify-content-center text-center d-block d-md-none">
            {/* <div className="col-6">
                <div>
                    <button className="btn-custom-2" onClick={handleDownloadPdf}>
                        Currículum
                    </button>
                </div>
            </div> */}
            <div className="col-6">
                <div>
                    <a href="#Contact" role="button">
                        <button className="btn-custom" aria-label="Ir a la sección de contacto" tabIndex={0}>
                            Contacto
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
});

export { 
    ButtonsDesktop,
    ButtonsMobile
};