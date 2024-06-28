import { lazy } from "react";
import { SpinnerLoading } from "./spinnerLoading/SpinnerLoading";
import { MyPhoto } from "./myPhoto/MyPhoto"; 
import { ButtonsDesktop, ButtonsMobile } from "./buttons/Buttons";
import CardProps from "./card/cardProps";

export const ScrollTop = lazy(() => import("./scrollTop/ScrollTop"));
export { SpinnerLoading };
export { MyPhoto };
export const TechnologiesCarousel = lazy(() => import("./technologies/Technologies-carousel"));
export const TimeLine = lazy(() => import("./timeLine/TimeLine"));
export const Cards = lazy(() => import("./cards/Cards"));
export const CardComponent = lazy(() => import("./card/cardComponent"));
export { ButtonsDesktop, ButtonsMobile };
export type { CardProps };
export const CalendlyWidget = lazy(() => import("./calendlyWidget/CalendlyWidget"));
