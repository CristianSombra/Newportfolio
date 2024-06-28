import { lazy } from "react"

export const Home = lazy(() => import("./home/Home"));
export const About = lazy(() => import("./about/About"));
export const Trajectory = lazy(() => import("./trajectory/Trajectory"));
export const Experience = lazy(() => import("./experience/Experience"));
export const Contact = lazy(() => import("./contact/Contact"));
