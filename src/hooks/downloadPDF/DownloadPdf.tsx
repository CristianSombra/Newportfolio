import { useCallback } from 'react';
import axios from 'axios';

const useDownloadPdf = () => {
    const downloadPdf = useCallback(async (pdfUrl: string) => {
        try {
            const response = await axios.get(pdfUrl, {
                responseType: 'blob' // Importante para manejar archivos binarios
            });
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const urlBlob = window.URL.createObjectURL(blob);

            // Crear un enlace oculto y simular un clic para iniciar la descarga
            const link = document.createElement('a');
            link.href = urlBlob;
            link.setAttribute('download', 'document.pdf'); // Nombre del archivo que se descargará
            document.body.appendChild(link);
            link.click();
            link.remove();

            // Revocar el objeto URL después de un tiempo
            setTimeout(() => window.URL.revokeObjectURL(urlBlob), 100);
        } catch (error) {
            console.error('Error descargando el PDF:', error);
        }
    }, []);

    return { downloadPdf };
};

export default useDownloadPdf;
