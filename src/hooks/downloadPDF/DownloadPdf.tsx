import { useCallback } from 'react';
import axios from 'axios';

const useDownloadPdf = () => {
    const downloadPdf = useCallback(async (pdfUrl: string) => {
        try {
            const response = await axios.get(pdfUrl, {
                responseType: 'blob' // Importante para manejar archivos binarios
            });
            const urlBlob = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
            window.open(urlBlob, '_blank', 'noopener,noreferrer');
        } catch (error) {
            console.error('Error abriendo el PDF en una nueva pestaña:', error);
        }
    }, []);

    return { downloadPdf };
};

export default useDownloadPdf;
