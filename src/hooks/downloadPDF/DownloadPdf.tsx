import { useCallback } from 'react';

const useDownloadPdf = () => {
    const downloadPdf = useCallback((pdfUrl: string, fileName: string = 'Cristian Sombra.pdf') => {
        // Crear un enlace oculto y simular un clic para iniciar la descarga
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', fileName); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, []);

    return { downloadPdf };
};

export default useDownloadPdf;
