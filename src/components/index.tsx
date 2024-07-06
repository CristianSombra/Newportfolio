import { lazy } from "react";
import { ButtonsDesktop, ButtonsMobile } from "./buttons/buttonsCallToAction/Buttons";
import { ButtonSeeMore } from "./buttons/buttonSeeMore/ButtonSeeMore";
import { SpinnerLoading } from "./spinnerLoading/SpinnerLoading";
import AnimateProps from "./animateSection/AnimateSection";
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
export type { AnimateProps }
export type { CardProps };
export { SpinnerLoading };
export { ButtonSeeMore }
export { TimeLine };
export { MyPhoto };