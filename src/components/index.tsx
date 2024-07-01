import { lazy } from "react";
import { SpinnerLoading } from "./spinnerLoading/SpinnerLoading";
import { ButtonsDesktop, ButtonsMobile } from "./buttons/Buttons";
import { MyPhoto } from "./myPhoto/MyPhoto";
import TimeLine from "./timeLine/TimeLine"; 
import CardProps from "./card/cardProps";

export const ScrollTop = lazy(() => import("./scrollTop/ScrollTop"));
export const TechnologiesCarousel = lazy(() => import("./technologies/Technologies-carousel"));
export const SwiperProjects = lazy(() => import("./swiperProjects/SwiperProjects"));
export const Cards = lazy(() => import("./cards/Cards"));
export const CardComponent = lazy(() => import("./card/cardComponent"));
export const CalendlyWidget = lazy(() => import("./calendlyWidget/CalendlyWidget"));
export { ButtonsDesktop, ButtonsMobile };
export { SpinnerLoading };
export type { CardProps };
export { MyPhoto };
export { TimeLine };