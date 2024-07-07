import React from "react";
import TagList from "./tagList/TagList";
import '@/styles';

const TechnologiesCarousel: React.FC = React.memo(() => {
    return(
        <section className="container" aria-label="Lista de tecnologías utilizadas en el proyecto">
            <div className="row d-flex justify-content-center my-md-5">
                <div className="col-12 col-10">
                    <TagList />
                </div>
            </div>
        </section>
    );
});

export default TechnologiesCarousel