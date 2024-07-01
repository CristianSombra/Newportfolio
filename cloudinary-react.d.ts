declare module 'cloudinary-react' {
    import { ComponentType, ReactNode } from 'react';

    interface CloudinaryContextProps {
        cloudName: string;
        apiKey?: string;
        apiSecret?: string;
        children?: ReactNode;
    }

    export const CloudinaryContext: ComponentType<CloudinaryContextProps>;

    export const Image: ComponentType<{ publicId: string }>;
}
