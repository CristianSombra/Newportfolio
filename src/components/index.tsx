import { lazy } from "react";
import { ButtonsDesktop, ButtonsMobile } from "./buttons/buttonsCallToAction/Buttons";
import { ButtonSeeMore } from "./buttons/buttonSeeMore/ButtonSeeMore";
import { SpinnerLoading } from "./spinnerLoading/SpinnerLoading";
import AnimateProps from "./props/animateSection/AnimateSection";
import FormContactProps from "./props/formContact/FormContact";
import DisplayText from "./displayText/DisplayText";
import FormContact from "./formContact/FormContact";
import { MyPhoto } from "./myPhoto/MyPhoto";
import TimeLine from "./timeLine/TimeLine"; 
import CardProps from "./props/card/cardProps";

export const ScrollTop = lazy(() => import("./scrollTop/ScrollTop"));
export const TechnologiesCarousel = lazy(() => import("./technologies/Technologies-carousel"));
export const SwiperProjects = lazy(() => import("./swiperProjects/SwiperProjects"));
export const Cards = lazy(() => import("./cards/Cards"));
export const CardComponent = lazy(() => import("./card/cardComponent"));
export const CalendlyWidget = lazy(() => import("./calendlyWidget/CalendlyWidget"));
export { ButtonsDesktop, ButtonsMobile };
export { DisplayText }
export type { FormContactProps }
export type { AnimateProps }
export type { CardProps };
export { SpinnerLoading };
export { ButtonSeeMore }
export { FormContact }
export { TimeLine };
export { MyPhoto };