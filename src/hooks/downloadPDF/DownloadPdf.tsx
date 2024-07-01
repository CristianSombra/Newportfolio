import { useCallback } from 'react';
import axios from 'axios';

const useDownloadPdf = () => {
    const downloadPdf = useCallback(async (pdfUrl: string) => {
        try {
            const response = await axios.get(pdfUrl, {
                responseType: 'blob' // Importante para manejar archivos binarios
            });
            const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = urlBlob;
            link.setAttribute('download', 'Cristian Sombra.pdf');
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error descargando el PDF:', error);
        }
    }, []);

    return { downloadPdf };
};

export default useDownloadPdf;
