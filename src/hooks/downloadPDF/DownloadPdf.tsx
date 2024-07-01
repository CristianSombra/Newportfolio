import { useCallback } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

const useDownloadPdf = () => {
    const downloadPdf = useCallback(async (pdfUrl: string) => {
        try {
            const response = await axios.get(pdfUrl, {
                responseType: 'blob' // Importante para manejar archivos binarios
            });
            const blob = new Blob([response.data], { type: 'application/pdf' });
            saveAs(blob, 'Cristian Sombra.pdf');
        } catch (error) {
            console.error('Error descargando el PDF:', error);
        }
    }, []);

    return { downloadPdf };
};

export default useDownloadPdf;
