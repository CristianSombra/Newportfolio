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

            // Intentar usar FileSaver.js primero
            try {
                saveAs(blob, 'Cristian Sombra.pdf');
            } catch (error) {
                console.error('Error usando FileSaver.js, intentando método alternativo:', error);

                // Método alternativo usando un iframe
                const urlBlob = window.URL.createObjectURL(blob);
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = urlBlob;
                document.body.appendChild(iframe);
                iframe.onload = () => {
                    setTimeout(() => {
                        document.body.removeChild(iframe);
                        window.URL.revokeObjectURL(urlBlob);
                    }, 100);
                };
            }
        } catch (error) {
            console.error('Error descargando el PDF:', error);
        }
    }, []);

    return { downloadPdf };
};

export default useDownloadPdf;
