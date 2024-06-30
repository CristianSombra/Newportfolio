import { lazy } from 'react';

export const SwiperDesktop = lazy(() => import('./SwiperDesktop/SwiperDesktop'));
export const SwiperMobile = lazy(()=> import('./SwiperMobile/SwiperMobile'));