import React from "react";
import {
    Home,
    About,
    Trajectory,
    Experience,
    Contact
} from "../pages";

const AppRouter: React.FC = () => {
    return(
        <>
            <Home />
            <About />
            <Trajectory />
            <Experience />
            <Contact />
            {/* <Route path="*" element={<NotFound />} /> */}
        </>
    );
};

export default AppRouter;